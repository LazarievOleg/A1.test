#!/bin/bash

docker-compose  stop
docker-compose  down --volumes --remove-orphans
docker-compose  rm -fsv
