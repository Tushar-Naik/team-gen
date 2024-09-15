#!/bin/bash
set -e

docker --version
docker build -t my-react-app .
docker create --name temp-container my-react-app
docker cp temp-container:/usr/share/nginx/html/. ./build/
docker rm temp-container
ls -la build/