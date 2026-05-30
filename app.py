#!/usr/bin/env python3
"""
Simple Hello World Flask application for OpenShift training
"""

from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello World! This is a simple app for OpenShift training.'

@app.route('/health')
def health():
    return {'status': 'healthy'}, 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080, debug=False)
