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
            #print(game)
            beginTime = game['start'].split('T')
            #print(beginTime)
            
            dateNow = datetime.now()
            dateNow = dateNow.strftime("%Y-%m-%d")

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

    for game in gameData:
        
        gameId = game['gameId']
        url = 'https://liiga.fi/api/v2/games/stats/2025/93' # VAIN DEV KÄYTTÖÖN
        #url = f'https://liiga.fi/api/v2/games/stats/2025/{gameId}' 
        print(url)

        response = requests.get(url)

        if response.status_code == 200:
            data = response.json()

            print(data['homeTeam'])
def main():
    gameData = matchnumbers()
    parseGameData(gameData)

if __name__ == '__main__':
    main()