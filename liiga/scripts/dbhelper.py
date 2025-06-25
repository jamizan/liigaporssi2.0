from dotenv import load_dotenv
import os
import psycopg2 # type: ignore

load_dotenv()

host = os.getenv("PGHOST")
user = os.getenv("PGUSER")
password = os.getenv("PGPASSWORD")
database = os.getenv("PGDATABASE")
port = os.getenv("PGPORT")

conn = psycopg2.connect(
    host=host,
    user=user,
    password=password,
    database=database,
    port=port
)

@staticmethod
def insert_player_details(players_dict):
    cur = conn.cursor()
    for row in players_dict:
        player = players_dict[row]
        print(player)
        cur.execute(
            """
            INSERT INTO public.playerdata (playerid, teamid, teamname, firstname, lastname, role, jersey)
            VALUES (%s, %s, %s, %s, %s, %s, %s)
            ON CONFLICT (playerid) DO UPDATE SET
                teamid = EXCLUDED.teamid,
                teamname = EXCLUDED.teamname,
                firstname = EXCLUDED.firstname,
                lastname = EXCLUDED.lastname,
                role = EXCLUDED.role,
                jersey = EXCLUDED.jersey
            """,
            (
                player['playerid'],
                player['teamid'].split(':')[0],
                player['teamname'],
                player['firstname'],
                player['lastname'],
                player['role'],
                player['jersey']
            )
        )
    conn.commit()

@staticmethod
def insert_game_data(games_dict):
    cur = conn.cursor()
    for row in games_dict:
        cur.execute(
            """
            INSERT INTO public.gamedata
            (gameid, homeid, awayid, homename, awayname, season, starttime, endtime)
            VALUES(%s, %s, %s, %s, %s, %s, %s, %s)
            ON CONFLICT (gameid) DO UPDATE SET
                homeid = EXCLUDED.homeid,
                awayid = EXCLUDED.awayid,
                homename = EXCLUDED.homename,
                awayname = EXCLUDED.awayname,
                season = EXCLUDED.season,
                starttime = EXCLUDED.starttime,
                endtime = EXCLUDED.endtime
            """,
            (
                row['gameId'],
                row['homeId'].split(':')[0],
                row['awayId'].split(':')[0],
                row['homeName'],
                row['awayName'],
                row['season'],
                row['beginTime'],
                row['endTime']
            )
        )
    conn.commit()

@staticmethod
def insert_player_stats(stats_dict):
    cur = conn.cursor()
    for playerid in stats_dict:
        row = stats_dict[playerid]
        gameid = row.get('gameid', None)
        goals = row.get('goals', None)
        assists = row.get('assists', None)
        plusminus = row.get('plusminus', None)
        penalty_minutes = row.get('penaltyminutes', None)
        blocks = row.get('blocks', None)
        shots = row.get('shots', None)
        faceoffs = row.get('faceoffs', None)
        saves = row.get('saves', None)
        goalsallowed = row.get('goalsallowed', None)
        LPP = row.get('LPP', None)
        cur.execute(
            """
            INSERT INTO public.playerstats
            (playerid, goals, assists, plusminus, penaltyminutes, blocks, shots, faceoffs, lpp, gameid, saves, goalsallowed)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
            """,
            (
                playerid,
                goals,
                assists,
                plusminus,
                penalty_minutes,
                blocks,
                shots,
                faceoffs,
                LPP,
                gameid,
                saves,
                goalsallowed
            )
        )
        conn.commit()

@staticmethod
def get_player_position_by_id(player_id):
    cur = conn.cursor()
    cur.execute(
        """
        SELECT role FROM public.playerdata WHERE playerid = %s
        """,
        (player_id,)
    )
    result = cur.fetchone()
    if result:
        return result[0]
    return None




