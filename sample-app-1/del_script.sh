#!/bin/bash

files=($( ls ./k8s))

for (( idx=${#files[@]}-1 ; idx>=0 ; idx-- ))
do
    if [ -f ./k8s/${files[idx]} ]
    then
        kubectl delete -f ./k8s/${files[idx]}
    fi
done