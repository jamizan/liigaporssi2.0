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





