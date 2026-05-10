import requests

# Your API Key
API_KEY = "64c67abb2c36a8afbe2232ce40b840b8"

def get_weather(city):

    url = "https://api.openweathermap.org/data/2.5/weather"

    params = {
        "q": city,
        "appid": API_KEY,
        "units": "metric"
    }

    response = requests.get(url, params=params)

    data = response.json()

    # Error handling
    if response.status_code != 200:
        return {
            "error": data.get("message", "City not found")
        }

    temperature = data["main"]["temp"]
    humidity = data["main"]["humidity"]
    wind_speed = data["wind"]["speed"]
    weather = data["weather"][0]["main"]

    # AI Prediction Logic
    if humidity > 80:
        prediction = "High Chance of Rain"

    elif temperature > 35:
        prediction = "Very Hot Weather"

    elif weather == "Clouds":
        prediction = "Cloudy Weather"

    else:
        prediction = "Normal Weather"

    return {
        "city": city,
        "temperature": temperature,
        "humidity": humidity,
        "wind_speed": wind_speed,
        "weather": weather,
        "prediction": prediction
    }