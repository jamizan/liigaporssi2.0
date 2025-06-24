import requests
import json
import os
import dbhelper

#url = 'https://www.liiga.fi/api/v2/players/info?tournament=runkosarja&season=2025'
url = 'https://www.liiga.fi/api/v2/players/info?tournament=runkosarja&fromSeason=2025&toSeason=2025'


response = requests.get(url)

playerData = []
players_dict = {}

if response.status_code == 200:
    data = response.json()

    i = 0
    while(i < len(data)):
        playerid = data[i]['id']
        playerTeamId = data[i]['teamId']
        playerTeamName = data[i]['teamName']
        firstName = data[i]['firstName']
        lastName = data[i]['lastName']
        role = data[i]['role']
        jersey = data[i]['jersey']

        players_dict[playerid] = {
            'teamid' : playerTeamId,
            'teamname' : playerTeamName,
            'firstname' : firstName,
            'lastname' : lastName,
            'role' : role,
            'jersey' : jersey,
            'playerid' : playerid
        }

        playerData.append([playerid, playerTeamId, playerTeamName, firstName, lastName, role, jersey])

        i += 1

    dbhelper.insert_player_details(players_dict)

    project_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    public_path = os.path.join(project_root, 'public', 'playerData.json')

    with open(public_path, 'w', encoding='utf-8') as json_file:
        json.dump(players_dict, json_file, ensure_ascii=False, indent=4)

    print('file created!')

else:
    print('Status code != 200')

    