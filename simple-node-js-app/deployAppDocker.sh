#!/bin/sh

set -e

export DOCKER_ID_USER="osmsnbey"
docker login

docker build --no-cache=true -t osmsnbey/node-ingress:v2 .
docker push osmsnbey/node-ingress:v2
