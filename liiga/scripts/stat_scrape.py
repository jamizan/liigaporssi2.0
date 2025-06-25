import requests
import json
from datetime import datetime
import os
import dbhelper

# Reading data from JSON file created by playerParse.py
def readJson():
    # Use absolute path based on this script's location
    project_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    public_path = os.path.join(project_root, 'public', 'playerData.json')
    with open(public_path, 'r', encoding='utf-8') as file:
        data = json.load(file)
    return data

# Parsing matchnumbers from Liiga
def matchnumbers():
    url = 'https://www.liiga.fi/api/v2/games?tournament=playoffs&season=2025'

    response = requests.get(url)
    
    # If connection is successful
    if response.status_code == 200:
        data = response.json()
        gameData = []

        for game in data:
            beginTime = game['start'].split('T') if 'start' in game else ('', '')
            endTime = game['end'].split('T') if 'end' in game else ('', '')
            
    # Compare game dates to todays date
            #dateNow = datetime.now()
            #dateNow = dateNow.strftime("%Y-%m-%d")
            dateNow = '2025-04-11' # VAIN DEV KÄYTTÖÖN
    # If game date is today => save team data
            if beginTime[0] == dateNow:
                gameId = game['id']
                homeTeamId = game['homeTeam']['teamId']
                awayTeamId = game['awayTeam']['teamId']
                homeTeamName = game['homeTeam']['teamName']
                awayTeamName = game['awayTeam']['teamName']
                season = beginTime[0].split('-')[0]
                d = {
                    'gameId' : gameId,
                    'homeId' : homeTeamId,
                    'awayId' : awayTeamId,
                    'homeName' : homeTeamName,
                    'awayName' : awayTeamName,
                    'season' : season,
                    'beginTime' : beginTime[1].rstrip('Z'),
                    'endTime' : endTime[1].rstrip('Z')
                }
                gameData.append(d)
    # If matches today => return team data
        dbhelper.insert_game_data(gameData)
    if gameData != '':
        return(gameData)
    else:
        print('an error occured')

# Parsing player stats from Liiga
def parseGameData(gameData):

    allGStats = []
    allPStats = []

    # Loops trough each game in the day
    for game in gameData:
        
        gameId = game['gameId']
        #url = 'https://liiga.fi/api/v2/games/stats/2025/93' # VAIN DEV KÄYTTÖÖN
        url = f'https://liiga.fi/api/v2/games/stats/2025/{gameId}'

        response = requests.get(url)

    # If connection is successful format matchdata
        if response.status_code == 200:
            data = response.json()

            homeTeam = data['homeTeam']
            awayTeam = data['awayTeam']

            hStats = goalieStats(gameId, homeTeam)
            aStats = goalieStats(gameId, awayTeam)
            allGStats.extend((hStats, aStats))

            hPStats = playerStats(gameId, homeTeam)
            aPStats = playerStats(gameId, awayTeam)
            allPStats.extend((hPStats, aPStats))

        else:
            print(response.status_code)

    return allGStats, allPStats

# Formatting goalie stats
def goalieStats(gameid, team):            
    data = {}

    i = 0
    # Goes through once for each goalie
    while i < len(team[0]['goaliePeriodStats']):
        assists, goals, plus, minus, penaltyminutes, voittomaali, alivoimaMaali, alivoimaSyotto, blocks, saves, goalsAllowed, faceoffsTotal, faceoffsWon = 0,0,0,0,0,0,0,0,0,0,0,0,0
    # Loops through for every period on each goalie in a match
        for period in team:
            goalieStats = period['goaliePeriodStats']
            scoreStats = goalieStats[i]['period']

            playerId = goalieStats[i]['playerId']
            assists += scoreStats['assists']
            goals += scoreStats['goals']
            plus += scoreStats['plus']
            minus += scoreStats['minus']
            penaltyminutes += scoreStats['penaltyminutes']
            voittomaali += scoreStats['winningGoal']
            alivoimaMaali += scoreStats['shortHandedGoals']
            alivoimaSyotto += scoreStats['penaltykillAssists']
            blocks += scoreStats['blockedShots']
            saves += scoreStats['saves']
            goalsAllowed += scoreStats['goalsAllowed']
            faceoffsTotal += scoreStats['faceoffsTotal']
            faceoffsWon += scoreStats['faceoffsWon']

    # Format data to dictionary
        data[playerId] = {'gameid': gameid, 'assists' : assists, 'goals' : goals, 'plus' : plus, 'minus' : minus, 'penaltyminutes' : penaltyminutes, 'voittomaali' : voittomaali, 'alivoimaMaali' : alivoimaMaali, 'alivoimaSyotto' : alivoimaSyotto, 'blocks' : blocks, 'saves' : saves, 'goalsAllowed' : goalsAllowed, 'faceoffsWon' : faceoffsWon, 'faceoffsTotal' : faceoffsTotal}

        i += 1

    return data

# Formatting player stats
def playerStats(gameid, team):
    data = {}
    i = 0
    
    # Goes through once for each player
    while i < len(team[0]['periodPlayerStats']):
        assists, goals, plus, minus, penaltyminutes, voittomaali, alivoimaMaali, alivoimaSyotto, blocks, shots,  faceoffsTotal, faceoffsWon = 0,0,0,0,0,0,0,0,0,0,0,0
    # Loops through for every period on each player in a match
        for period in team:
            playerStats = period['periodPlayerStats']
            scoreStats = playerStats[i]['period']

            playerId = str(playerStats[i]['playerId'])
            assists += scoreStats['assists']
            goals += scoreStats['goals']
            plus += scoreStats['plus']
            minus += scoreStats['minus']
            penaltyminutes += scoreStats['penaltyminutes']
            voittomaali += scoreStats['winningGoal']
            alivoimaMaali += scoreStats['shortHandedGoals']
            alivoimaSyotto += scoreStats['penaltykillAssists']
            blocks += scoreStats['blockedShots']
            shots += scoreStats['shots']
            faceoffsTotal += scoreStats['faceoffsTotal']
            faceoffsWon += scoreStats['faceoffsWon']

    # Format to dictionary
        data[playerId] = {'gameid': gameid,'assists' : assists, 'goals' : goals, 'plus' : plus, 'minus' : minus, 'penaltyminutes' : penaltyminutes, 'voittomaali' : voittomaali, 'alivoimaMaali' : alivoimaMaali, 'alivoimaSyotto' : alivoimaSyotto, 'blocks' : blocks, 'shots' : shots, 'faceoffsWon' : faceoffsWon, 'faceoffsTotal' : faceoffsTotal}

        i += 1

    return data

# Parsing separate penalty instances
def penaltyPlayerData(gameData):
    penaltyData = []
    for i in gameData:
        gameid = i['gameId']
        url = f"https://www.liiga.fi/api/v2/games/2025/{gameid}"
        response = requests.get(url)

        if response.status_code == 200:
            data = response.json()

            HTPenalty = data['game']['homeTeam']['penaltyEvents']
            ATPenalty = data['game']['awayTeam']['penaltyEvents']

            for i in HTPenalty:
                playerId = i['playerId']
                if playerId == '0':
                    continue
                else:
                    usedPlayerId = playerId

                minutes = i['penaltyMinutes']
                row = {'playerId' : playerId, 'minutes' : minutes}
                penaltyData.append(row)

            for i in ATPenalty:
                playerId = i['playerId']
                if playerId == '0':
                    continue
                else:
                    usedPlayerId = playerId

                    minutes = i['penaltyMinutes']
                    row = {'playerId' : playerId, 'minutes' : minutes}
                    penaltyData.append(row)

    return penaltyData

# Merging stats and penalties with player names using playerid
def mergeData(playerStats, goalieStats, penaltyData):
    
    returnData = {}

    # For every line in playerstats
    for i in playerStats:
        pKeys = i.keys()
        for id in pKeys:
            position = dbhelper.get_player_position_by_id(id)
# Count individual points
            LPP = countLPP(i[id], penaltyData, position, id)
            returnData[id] = {'gameid' : i[id]['gameid'],
                              'goals' : i[id]['goals'], 
                              'assists' : i[id]['assists'], 
                              'plusminus' : i[id]['plus'] - i[id]['minus'], 
                              'penaltyminutes' : i[id]['penaltyminutes'], 
                              'blocks' : i[id]['blocks'], 
                              'shots' : i[id]['shots'], 
                              'faceoffs' : i[id]['faceoffsTotal'] - i[id]['faceoffsWon'], 
                              'LPP' : LPP
                              }
                
    # For every line in goaliestats
    for x in goalieStats:
        gKeys = x.keys()
        for id in gKeys:
            position = dbhelper.get_player_position_by_id(id)
# Count individual points
            LPP = countLPP(x[id], penaltyData, position, id)
            returnData[id] = {'gameid' : x[id]['gameid'],
                              'goals' : x[id]['goals'], 
                              'assists' : x[id]['assists'], 
                              'penaltyminutes' : x[id]['penaltyminutes'], 
                              'saves' : x[id]['saves'],
                              'goalsallowed' : x[id]['goalsAllowed'], 
                              'LPP' : LPP
                              }

    return returnData

# Counting individual player stats
def countLPP(playerStats, penaltyData, position, id):
    # Sorting players for position => different position is different points
    # Calculating points according to https://liigaporssi.fi/ohjeet/ohjeet#pisteet

    # Calculating points for attackers
    if position == 'LEFT_WING' or position == 'CENTER' or position == 'RIGHT_WING':
        pos = 'A'
        Goals = playerStats['goals'] * 7
        Assists = playerStats['assists'] * 4

        if playerStats['plus'] > 0:
            Plus = playerStats['plus'] * 2
        else:
            Plus = 0

        if playerStats['minus'] >= 0:
            Minus = playerStats['minus']
        else:
            Minus = 0

        penalty = 0
        for i in penaltyData:
            penID = i['playerId']
            if penID == id:
                if i['minutes'] == 0:
                    penalty += 0
                if i['minutes'] == 2:
                    penalty += 1
                if i['minutes'] == 5:
                    penalty -= 2
                if i['minutes'] == 10:
                    penalty -= 5
                if i['minutes'] == 20:
                    penalty -= 8

        Blocks = playerStats['blocks']
        shots = playerStats.get('shots', 0)  # Use .get() to avoid KeyError if 'shots' is not present
        if shots != 0:
            if shots % 2 == 0:
                Shots = shots / 2
            else:
                Shots = (shots / 2) + 0.5
        else:
            Shots = 0

        previousBorder = 1
        c = 1
        foLPP = 1
        check = 0
        faceoffsBalance = playerStats['faceoffsWon'] - playerStats['faceoffsTotal']

        if faceoffsBalance > 0:
            faceoffsBalance = faceoffsBalance * -1
            check = -1
        if faceoffsBalance != 0:
            if faceoffsBalance > 0:
                while c < faceoffsBalance:
                    if c == previousBorder:
                        foLPP += 1
                        previousBorder = c + 1
                    c += 1
            if check < 0:
                foLPP = foLPP * -1
        else:
            foLPP = 0

        LPP = Goals + Assists + (Plus - Minus) + penalty + Blocks + Shots + foLPP

    # Sorting players for position => different position is different points
    # Calculating points according to https://liigaporssi.fi/ohjeet/ohjeet#pisteet

    # Calculating points for defenders
    elif position == 'LEFT_DEFENSEMAN' or position == 'RIGHT_DEFENSEMAN':
        pos = 'D'

        Goals = playerStats['goals'] * 9
        Assists = playerStats['assists'] * 6

        if playerStats['plus'] > 0:
            Plus = playerStats['plus'] * 3
        else:
            Plus = 0

        if playerStats['minus'] >= 0:
            Minus = playerStats['minus'] * 2
        else:
            Minus = 0

        penalty = 0
        for i in penaltyData:
            penID = i['playerId']
            if penID == id:
                if i['minutes'] == 0:
                    penalty += 0
                if i['minutes'] == 2:
                    penalty += 1
                if i['minutes'] == 5:
                    penalty -= 2
                if i['minutes'] == 10:
                    penalty -= 5
                if i['minutes'] == 20:
                    penalty -= 8

        Blocks = playerStats['blocks']

        if playerStats['shots'] != 0:
            if playerStats['shots'] % 2 == 0:
                Shots = playerStats['shots'] / 2
            else:
                Shots = (playerStats['shots'] / 2) + 0.5
        else:
            Shots = 0

        previousBorder = 1
        c = 1
        foLPP = 1
        check = 0
        faceoffsBalance = playerStats['faceoffsWon'] - playerStats['faceoffsTotal']

        if faceoffsBalance > 0:
            faceoffsBalance = faceoffsBalance * -1
            check = -1
        if faceoffsBalance != 0:
            if faceoffsBalance > 0:
                while c < faceoffsBalance:
                    if c == previousBorder:
                        foLPP += 1
                        previousBorder = c + 1
                    c += 1
            if check < 0:
                foLPP = foLPP * -1
        else:
            foLPP = 0

        LPP = Goals + Assists + (Plus - Minus) + penalty + Blocks + Shots + foLPP
        
    # Sorting players for position => different position is different points
    # Calculating points according to https://liigaporssi.fi/ohjeet/ohjeet#pisteet

    # Calculating points for goalies
    else:
        Goals = playerStats['goals'] * 25
        Assists = playerStats['assists'] * 10

        x = 1
        savePoints = 1

        while x < playerStats['saves'] and playerStats['saves'] != 0:
            if x % 5 == 0 and x >= 35:
                savePoints = savePoints + 3
            else:
                if x % 5 == 0:
                    savePoints = savePoints + 2
            x += 1

        if playerStats['saves'] != 0:
            LPPSaves = savePoints
        else:
            LPPSaves = 0

        penalty = 0
        for i in penaltyData:
            penID = i['playerId']
            if penID == id:
                if i['minutes'] == 0:
                    penalty += 0
                if i['minutes'] == 2:
                    penalty -= 1
                if i['minutes'] == 5:
                    penalty -= 2
                if i['minutes'] == 10:
                    penalty -= 5
                if i['minutes'] == 20:
                    penalty -= 8

        if playerStats['goalsAllowed'] < 5:
            goalsAllowed = playerStats['goalsAllowed']
        elif playerStats['goalsAllowed'] > 4:
            x = 5
            lastPoints = 4
            while x <= playerStats['goalsAllowed']:
                goalsAllowed = lastPoints + 2
                lastPoints = goalsAllowed
                x += 1
        else:
            goalsAllowed = 0

        LPP = Goals + Assists + LPPSaves + penalty - goalsAllowed     
    return LPP

# Creating JSON file for player data
def createJSON(mergedData):
    # Use absolute path based on this script's location
    project_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    public_path = os.path.join(project_root, 'public', 'playerData.json')
    with open(public_path, 'w', encoding='utf-8') as json_file:
        json.dump(mergedData, json_file, ensure_ascii=False, indent=4)
    print('file created!')

def main():
    # Parsing matchnumbers
    gameData = matchnumbers()
    # Parsing individual player stats
    goalieStats, playerStats = parseGameData(gameData)
    # Parsing penalty instances
    penaltyData = penaltyPlayerData(gameData)
    # Merging all data
    mergedData = mergeData(playerStats, goalieStats, penaltyData)

    dbhelper.insert_player_stats(mergedData)


if __name__ == '__main__':
    main()