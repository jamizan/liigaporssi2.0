import requests
import json
from datetime import datetime

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
        print(url)

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

  #  for i in allGStats:
 #       print(i)

    for i in allPStats:
        print(i)

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
        assists, goals, plus, minus, penaltyminutes, voittomaali, alivoimaMaali, alivoimaSyotto, blocks,  faceoffsTotal, faceoffsWon = 0,0,0,0,0,0,0,0,0,0,0
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
            faceoffsTotal += scoreStats['faceoffsTotal']
            faceoffsWon += scoreStats['faceoffsWon']


        data[playerId] = {'assists' : assists, 'goals' : goals, 'plus' : plus, 'minus' : minus, 'penaltyminutes' : penaltyminutes, 'voittomaali' : voittomaali, 'alivoimaMaali' : alivoimaMaali, 'alivoimaSyotto' : alivoimaSyotto, 'blocks' : blocks, 'faceoffsWon' : faceoffsWon, 'faceoffsTotal' : faceoffsTotal}

        i += 1

    return data


def main():
    gameData = matchnumbers()
    parseGameData(gameData)

if __name__ == '__main__':
    main()