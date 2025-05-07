# backend/fetch_players.py
from nba_api.stats.endpoints import leaguedashplayerstats
import pandas as pd
import json
import os

def fetch_season_data(season: str) -> pd.DataFrame:
    print(f"Fetching data for {season} season...")
    data = leaguedashplayerstats.LeagueDashPlayerStats(
        season=season,
        season_type_all_star='Regular Season',
        per_mode_detailed='PerGame'
    )
    df = data.get_data_frames()[0]
    # Add season column
    df['SEASON'] = season
    return df

def fetch_and_save():
    # Define seasons to fetch (including current season)
    seasons = [
        '2024-25',  # Current season (partial data) Update later?
        '2023-24',
        '2022-23',
        '2021-22',
        '2020-21',
        '2019-20'
    ]
    
    # Create data directory if it doesn't exist
    data_dir = "data"
    if not os.path.exists(data_dir):
        os.makedirs(data_dir)
    
    # Fetch and save data for each season
    for season in seasons:
        try:
            df = fetch_season_data(season)
            # Save to season-specific file
            filename = f"{data_dir}/players_{season.replace('-', '_')}.json"
            df.to_json(filename, orient="records")
            print(f"Successfully saved {season} season data to {filename}")
        except Exception as e:
            print(f"Error fetching {season} season data: {str(e)}")

if __name__ == "__main__":
    fetch_and_save()
