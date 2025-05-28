import os
import json
import datetime

def createFile():

    script_base_dir = os.path.dirname(os.path.abspath(__file__))

    # Read todays json stats file
    player_json_filename = 'playerStats.json'
    player_json_path = os.path.join(script_base_dir, 'liiga', 'public', player_json_filename)

    try:
        with open(player_json_path, 'r', encoding='utf-8') as file:
            data = json.load(file)

    except FileNotFoundError:
        print(f"{player_json_filename}: file not found: {player_json_path}")
    except json.JSONDecodeError:
        print(f"Error decoding JSON file. {player_json_filename}")

    yearly_json_filename = 'yearlyPlayerData.json'
    yearly_json_path = os.path.join(script_base_dir, 'liiga', 'public', yearly_json_filename)

    try:
        # Read data from yearly stats json
        with open(yearly_json_path, 'r', encoding='utf-8') as file:
            existing_data = json.load(file)

        #current_time = datetime.datetime.now().strftime("%Y_%m_%d")
        current_time = '2025_05_30'  # For testing purposes, use a fixed date

        new_data = {
            current_time: [
                data
            ]
        }

        existing_data.update(new_data)

        # Update data in yearly json
        if current_time in existing_data.keys():
            with open(yearly_json_path, 'w', encoding='utf-8') as file:
                json.dump(existing_data, file, indent=4, ensure_ascii=False)
            print(f'Data added with timestamp: {current_time}')
        else:
            print(f'A dataset already exists with timestamp: {current_time}')
        
    
    except json.JSONDecodeError as e:
        print(f"Error decoding JSON file. {yearly_json_filename}")
        print(f"Error: {e}")


def main():
    createFile()

if __name__ == '__main__':
    main()