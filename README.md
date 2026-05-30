# Simple Hello World - OpenShift Training

A simple Hello World Flask application designed for OpenShift training purposes.

## Overview

This is a basic Python Flask application that demonstrates how to containerize and deploy an application on OpenShift.

## Prerequisites

- Python 3.9+
- pip
- Docker (for local testing)
- OpenShift cluster access (for deployment)

## Local Development

1. Install dependencies:
```bash
pip install -r requirements.txt
```

2. Run the application:
```bash
python app.py
```

3. Access the application:
   - Main endpoint: http://localhost:8080/
   - Health check: http://localhost:8080/health

## Docker Build

Build the Docker image locally:
```bash
docker build -t simple-hello-world .
```

Run the container:
```bash
docker run -p 8080:8080 simple-hello-world
```

## OpenShift Deployment

Deploy to OpenShift:
```bash
oc new-app --name=hello-world --docker-image=<your-registry>/simple-hello-world
oc expose svc/hello-world
```

## Project Structure

```
.
├── app.py              # Flask application
├── requirements.txt    # Python dependencies
├── Dockerfile          # Container image definition
└── README.md           # This file
```

## Endpoints

- `GET /` - Returns "Hello World" message
- `GET /health` - Health check endpoint

## License

MIT
