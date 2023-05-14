from flask import Flask, render_template, request,jsonify
import random
import requests

app = Flask(__name__)
app.config['SECRET_KEY'] = 'hehe123'

numbersAPI = 'http://numbersapi.com/'

@app.route("/")
def homepage():
    """Show homepage."""

    return render_template("index.html")

def api_error_check(json):
    """checks if there is anythign wrongw ith the json, and returns error in dictionary"""
    allowedColors = ["red", "green", "orange", "blue"]
    errors = dict()
    if "name" not in json:
        errors["name"] = "This field is required."

    if "email" not in json:
        errors["email"] = "This field is required."

    if "year" not in json:
        errors["year"] = "This field is required."
    elif not json["year"].isnumeric():
        errors["year"] = "must be a integer"
    elif int(json["year"]) < 1900 or int(json["year"]) > 2000:
        errors["year"] = "Invalid value, must be within 1900 - 2000"

    if "color" not in json:
        errors["color"] = "This field is required."
    elif json["color"] not in allowedColors:
        errors["color"] = "Invalid value, must be one of: red, green, orange, blue."
    return errors
    
@app.route("/api/get-lucky-num", methods=["POST"])
def api():
    """Show homepage."""
    print("sdfs")
    jsonBody = request.json
    print(jsonBody)
    errors = api_error_check(jsonBody)

    if errors:
        return (jsonify(errors),200)
    
    randomNum = round(random.random() * 100)
    
    facts = dict()
    try:
        numResp = requests.get(numbersAPI+str(randomNum))
        yearResp = requests.get(numbersAPI+str(jsonBody['year'])+'/year')
    except:
        return jsonify('error')
    facts["num"] = {"num":randomNum,"fact":numResp.text}
    facts["year"] = {"num":jsonBody['year'],"fact":yearResp.text}
    return (jsonify(facts),201)
    
