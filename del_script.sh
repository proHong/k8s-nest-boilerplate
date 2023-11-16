#!/bin/bash

cd sample-app-2
./del_script.sh
cd ..

cd sample-app-1
./del_script.sh
cd ..


kubectl delete -f ./global-systems/1_rabbitmq.yml
kubectl delete -f ./global-systems/0_namespace.yml