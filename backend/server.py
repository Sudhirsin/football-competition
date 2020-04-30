# Server Creation
from flask import Flask
from flask import request, make_response, jsonify
from flask_mysqldb import MySQL
import hashlib
import base64
import json
import os
import jwt


app = Flask(__name__)


app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'nipLOVESsud@94'
app.config['MYSQL_DB'] = 'football_competitions'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
mysql = MySQL(app)

@app.route('/')
def home():
    return 'Home'


# Register route
@app.route('/api/users', methods=['POST'])
def user_register():
    body = request.json
    username = body['username']
    email = body['email']
    password = body['password']
    salt = generate_salt()
    salt_password = salt + password
    password_hash = hash_cycle(salt_password)
    email_hash = hash_cycle(email)
    cursor = mysql.connection.cursor()
    cursor.execute(
        """INSERT INTO users (username, email, salt, password_hash, api_key)
        VALUES (%s, %s, %s, %s, %s)""", (str(username), str(email), str(salt), str(password_hash), str(email_hash))
    )
    mysql.connection.commit()
    cursor.close()
    return {"error":False, "message":"user registered successfully"}

# Login route
@app.route('/api/auth', methods=['POST'])
def user_login():
    body = request.json
    email = body['email']
    password = body['password']
    cursor = mysql.connection.cursor()
    cursor.execute(
        """SELECT * FROM users WHERE email = %s""", [(str(email))]
    )
    results = cursor.fetchall()
    cursor.close()
    users = []
    for user in results:
        users.append(user)
            
    if len(users) != 0:
        for user in users:
            if user['password_hash'] == hash_cycle(user['salt'] + password):
                encode_data = jwt.encode({"id": user["id"]}, 'sudhir', algorithm='HS256')
                return {
                            "message": "Sign successfully", 
                            "token": str(encode_data), 
                            "error": False,
                            "api_key": user['api_key']
                        }
            else:
                return {'message': "Wrong Password", "error": True}
    return {'message': 'Please Signup first', "error": True}


def hash_cycle(usr_str):
    for i in range(10):
        usr_str = md5_hash(usr_str)
        return usr_str

def md5_hash(string):
    hash = hashlib.md5()
    hash.update(string.encode('utf-8'))
    return hash.hexdigest()

def generate_salt():
    salt = os.urandom(16)
    return str(base64.b64encode(salt))

def token_decoder():
    auth_header = request.headers.get('Authorization')
    token_encoded = auth_header.split(' ')[1]
    decode_data = jwt.decode(token_encoded, 'sudhir', algorithms=['HS256'])
    return decode_data
