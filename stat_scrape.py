import requests
import json
from datetime import datetime

def readJson():
    with open('playerData.json', 'r', encoding='utf-8') as file:
        data = json.load(file)

    return data

def matchnumbers():
    url = 'https://www.liiga.fi/api/v2/games?tournament=runkosarja&season=2025'

    response = requests.get(url)
    
    if response.status_code == 200:
        data = response.json()
        gameData = []

        for game in data:
            beginTime = game['start'].split('T')
            
            dateNow = datetime.now()
            #dateNow = dateNow.strftime("%Y-%m-%d")
            dateNow = '2024-09-10' # VAIN DEV KÄYTTÖÖN
            
            if beginTime[0] == dateNow:
                gameId = game['id']
                homeTeamId = game['homeTeam']['teamId']
                awayTeamId = game['awayTeam']['teamId']
                homeTeamName = game['homeTeam']['teamName']
                awayTeamName = game['awayTeam']['teamName']
                d = {
                    'gameId' : gameId,
                    'homeId' : homeTeamId,
                    'awayId' : awayTeamId,
                    'homeName' : homeTeamName,
                    'awayName' : awayTeamName
                }
                gameData.append(d)
                
    if gameData != '':
        return(gameData)
    else:
        print('an error occured')

def parseGameData(gameData):

    allGameData = []
    allGStats = []
    allPStats = []

    # Loops trough each game in the day
    for game in gameData:
        
        gameId = game['gameId']
        #url = 'https://liiga.fi/api/v2/games/stats/2025/93' # VAIN DEV KÄYTTÖÖN
        url = f'https://liiga.fi/api/v2/games/stats/2025/{gameId}' 

        response = requests.get(url)

        if response.status_code == 200:
            data = response.json()

            homeTeam = data['homeTeam']
            awayTeam = data['awayTeam']

            hStats = goalieStats(homeTeam)
            aStats = goalieStats(awayTeam)
            allGStats.extend((hStats, aStats))

            hPStats = playerStats(homeTeam)
            aPStats = playerStats(awayTeam)
            allPStats.extend((hPStats, aPStats))

        else:
            print(response.status_code)

    return allGStats, allPStats


def goalieStats(team):            
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


        data[playerId] = {'assists' : assists, 'goals' : goals, 'plus' : plus, 'minus' : minus, 'penaltyminutes' : penaltyminutes, 'voittomaali' : voittomaali, 'alivoimaMaali' : alivoimaMaali, 'alivoimaSyotto' : alivoimaSyotto, 'blocks' : blocks, 'saves' : saves, 'goalsAllowed' : goalsAllowed, 'faceoffsWon' : faceoffsWon, 'faceoffsTotal' : faceoffsTotal}

        i += 1

    return data

def playerStats(team):
    data = {}
    i = 0
    
    # Goes through once for each player
    while i < len(team[0]['periodPlayerStats']):
        assists, goals, plus, minus, penaltyminutes, voittomaali, alivoimaMaali, alivoimaSyotto, blocks, shots,  faceoffsTotal, faceoffsWon = 0,0,0,0,0,0,0,0,0,0,0,0
        # Loops through for every period on each player in a match
        for period in team:
            playerStats = period['periodPlayerStats']
            scoreStats = playerStats[i]['period']

            playerId = playerStats[i]['playerId']
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


        data[playerId] = {'assists' : assists, 'goals' : goals, 'plus' : plus, 'minus' : minus, 'penaltyminutes' : penaltyminutes, 'voittomaali' : voittomaali, 'alivoimaMaali' : alivoimaMaali, 'alivoimaSyotto' : alivoimaSyotto, 'blocks' : blocks, 'shots' : shots, 'faceoffsWon' : faceoffsWon, 'faceoffsTotal' : faceoffsTotal}

        i += 1

    return data

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

def mergeData(playerStats, goalieStats, JsonData, penaltyData):

    data = []

    jKeys = JsonData.keys()


    for i in playerStats:
        pKeys = i.keys()
        for id in pKeys:
            if str(id) in jKeys:
                position = JsonData[str(id)]['role']
                LPP = countLPP(i[id], penaltyData, position, id)
                i[id]['LPP'] = LPP
                data.append([id, JsonData[str(id)], i[id]])

    for x in goalieStats:
        gKeys = x.keys()
        for id in gKeys:
            if str(id) in jKeys:
                position = JsonData[str(id)]['role']
                LPP = countLPP(x[id], penaltyData, position, id)
                x[id]['LPP'] = LPP
                data.append([id, JsonData[str(id)], x[id]])


    return data


def countLPP(playerStats, penaltyData, position, id):
    
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
        

    else:
        pos = 'G'

        Goals = playerStats['goals'] * 25
        Assists = playerStats['assists'] + 10

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


def main():
    gameData = matchnumbers()
    goalieStats, playerStats = parseGameData(gameData)
    penaltyData = penaltyPlayerData(gameData)
    JsonData = readJson()
    mergedData = mergeData(playerStats, goalieStats, JsonData, penaltyData)


if __name__ == '__main__':
    main()