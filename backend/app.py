from flask import Flask, request, jsonify
import sys
import os

# Access ML folder
sys.path.append(os.path.abspath("../ml"))

from weather_api_prediction import get_weather

app = Flask(__name__)

@app.route("/weather", methods=["GET"])
def weather():

    city = request.args.get("city")

    result = get_weather(city)

    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True)