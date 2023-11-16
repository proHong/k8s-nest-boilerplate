#!/bin/bash

docker build -t sample-2-gateway-svc -f apps/gateway-svc/Dockerfile .
docker build -t sample-2-sample-svc -f apps/sample-svc/Dockerfile .

kubectl apply -f ./k8s/0_namespace.yml
kubectl apply -f ./k8s/1_configmap.yml
kubectl apply -f ./k8s/2_gateway-svc.yml
kubectl apply -f ./k8s/3_sample-svc.yml