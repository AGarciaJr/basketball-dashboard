# backend/fetch_players.py
from nba_api.stats.endpoints import leaguedashplayerstats
import pandas as pd

def fetch_and_save():
    print("Fetching data from NBA Stats API...")
    data = leaguedashplayerstats.LeagueDashPlayerStats(
        season='2023-24',
        season_type_all_star='Regular Season',
        per_mode_detailed='PerGame'
    )
    df = data.get_data_frames()[0]
    df.to_json("players.json", orient="records")
    print("Saved players.json successfully!")

if __name__ == "__main__":
    fetch_and_save()
