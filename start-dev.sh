#!/bin/sh
docker build . -t metager && docker run -p 8000:8000/tcp metager;
