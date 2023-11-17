#!/bin/bash

kubectl apply -f "https://github.com/rabbitmq/cluster-operator/releases/latest/download/cluster-operator.yml"

for file in ./global-systems/*
do
        if [ -f $file ]
        then
                kubectl apply -f $file
        fi
done


for dir in ./*
do
        if [ -d $dir ]
        then
            cd $dir
            if [ -f ./run_script.sh ]
            then
                ./run_script.sh
            fi
            cd ..
        fi
done