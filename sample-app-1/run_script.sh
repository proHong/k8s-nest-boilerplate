#!/bin/bash

for file in ./apps/*
do
        if [ -d $file ]
        then
            if [ -f $file/Dockerfile ]
            then
                docker build -t $(basename $PWD)-$(basename $file) -f $file/Dockerfile .
            fi
        fi
done

for file in ./k8s/*
do
        if [ -f $file ]
        then
            kubectl apply -f $file
        fi
done