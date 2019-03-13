#!/bin/sh

export DIR_DATA_PATH="$PWD"

export CONTAINER_COMMAND="yarn start:dev"
export CONTAINER_SCALE="1"
export CONTAINER_PORT="7070"

docker-compose down
