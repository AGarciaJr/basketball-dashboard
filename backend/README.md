# Hoops IQ Backend

The backend service for Hoops IQ, built with Python, FastAPI, and the NBA API.

## 🚀 Getting Started

### Prerequisites

- Python 3.8 or later
- pip (Python package manager)

### Installation

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create and activate a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

### Data Fetching

The backend includes a script to fetch NBA player statistics:

1. Run the fetch script:
```bash
python fetch_players.py
```

This will:
- Fetch data for multiple seasons (2019-20 to 2024-25)
- Save each season's data in separate JSON files
- Store the files in the `data` directory

2. Copy the data to the frontend:
```bash
python copy_data.py
```

### Running the Server

Start the FastAPI server:
```bash
uvicorn main:app --reload
```

The API will be available at `http://localhost:8000`

## 🏗️ Project Structure

```
backend/
├── data/           # JSON data files
├── main.py         # FastAPI application
├── fetch_players.py # Data fetching script
├── copy_data.py    # Data copying script
└── requirements.txt # Python dependencies
```

## 📊 API Endpoints

- `GET /`: Health check endpoint
- `GET /players`: Returns player statistics

## 🛠️ Dependencies

- FastAPI
- NBA API
- Pandas
- Other dependencies listed in `requirements.txt`

## 📝 License

MIT License 