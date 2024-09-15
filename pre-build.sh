#!/bin/bash
docker build -t team-gen .
docker create --name temp-container team-gen
docker cp temp-container:/usr/share/nginx/html/. ./build/
docker rm temp-container