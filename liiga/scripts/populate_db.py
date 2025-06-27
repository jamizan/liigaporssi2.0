from stat_scrape import main as ss

'''This script is used to populate the database with player statistics for a specific game date.
If no date is provided, every game will be scraped from the start of the season until today.
'''

dates = [
    "2025-03-18",
    "2025-03-19",
    "2025-03-21",
    "2025-03-22",
    "2025-03-24",
    "2025-03-26",
    "2025-03-27",
    "2025-03-28",
    "2025-03-31",
    "2025-04-02",
    "2025-04-04",
    "2025-04-07",
    "2025-04-09",
    "2025-04-11",
    "2025-04-12",
    "2025-04-14",
    "2025-04-16",
    "2025-04-18",
    "2025-04-21",
    "2025-04-23",
    "2025-04-25",
    "2025-04-26",
    "2025-04-28",
    "2025-04-30",
    "2025-05-02",
    "2025-05-03",
    "2025-05-06"
]

for date in dates:
    ss(date)

