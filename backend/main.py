from flask import Flask, request, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

@app.route('/send_response', methods=['POST'])
def send_response():
    try:
        data = request.get_json()
        first_name = data['firstName']
        last_name = data['lastName']
        gender = data['gender']
        date_of_birth = data['date']
        user_response = data['response']

        json_data = {
            "firstName": first_name,
            "lastName": last_name,
            "dateOfBirth": date_of_birth,
            "gender": gender,
            "response": user_response
        }
        response_list = []
        with open('response.json', 'r+') as file:
            response_list = json.load(file)

        response_list.append(json_data)
        with open('response.json', 'w+') as file:
            json.dump(response_list, file, indent=4)

        json_data = json.dumps(json_data, indent=4)

        response = {
            "status": "success",
            "message": "Data received successfully"
        }

    except Exception as e:
        response = {
            "status": "error",
            "message": "Data not received",
            "error": str(e)
        }

    return response

if __name__ == '__main__':
    app.run(debug=True)