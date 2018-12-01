#!/bin/bash

NETWORK_NAME="order-$2-network"
DB_CONTAINER_NAME="order-$2-mysql"
API_CONTAINER_NAME="order-$2-api"

case $1 in
    "create")
        docker network create $NETWORK_NAME

        docker create --name=$DB_CONTAINER_NAME --net $NETWORK_NAME --env="MYSQL_ROOT_PASSWORD=root" --env "MYSQL_DATABASE=order" mysql:5.7
        docker create --name=$API_CONTAINER_NAME --net $NETWORK_NAME -p $3:3000 --env="MYSQL_HOST=$DB_CONTAINER_NAME" order_api:latest
        ;;
    "start")
        docker start $DB_CONTAINER_NAME
        docker start $API_CONTAINER_NAME
        ;;
    "rm")
        docker container rm -f $DB_CONTAINER_NAME
        docker container rm -f $API_CONTAINER_NAME

        docker network rm $NETWORK_NAME
        ;;
    *)
        printf "USAGE: \tcreate <name> <bind_port>\n\tstart <name>\n\trm <name>\n"
        ;;
esac