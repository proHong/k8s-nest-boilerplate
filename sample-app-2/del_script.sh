#!/bin/bash

kubectl delete -f ./k8s/3_sample-svc.yml
kubectl delete -f ./k8s/2_gateway-svc.yml
kubectl delete -f ./k8s/1_configmap.yml
kubectl delete -f ./k8s/0_namespace.yml