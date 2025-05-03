from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from nba_api.stats.endpoints import leaguedashplayerstats

app = FastAPI()

# Allow frontend to call this backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Welcome to FantasyStat+ API"}

@app.get("/players")
def get_players():
    data = leaguedashplayerstats.LeagueDashPlayerStats(
        season='2023-24',
        season_type_all_star='Regular Season',
        per_mode_detailed='PerGame'
    )
    df = data.get_data_frames()[0]
    return df.to_dict(orient='records')
