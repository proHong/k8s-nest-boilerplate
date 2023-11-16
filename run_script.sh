#!/bin/bash

kubectl apply -f "https://github.com/rabbitmq/cluster-operator/releases/latest/download/cluster-operator.yml"

kubectl apply -f ./global-systems/0_namespace.yml
kubectl apply -f ./global-systems/1_rabbitmq.yml

cd sample-app-1
./run_script.sh
cd ..

cd sample-app-2
./run_script.sh
cd ..