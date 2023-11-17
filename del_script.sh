#!/bin/bash
shopt -s nullglob 

files=($( ls ))

for (( idx=${#files[@]}-1 ; idx>=0 ; idx-- ))
do
    if [ -d ${files[idx]} ]
    then
        cd ${files[idx]}
        if [ -f ./del_script.sh ]
        then
            ./del_script.sh
        fi
        cd ..
    fi
done

globalsystems=($( ls ./global-systems ))

for (( idx=${#globalsystems[@]}-1 ; idx>=0 ; idx-- ))
do
    if [ -f ./global-systems/${globalsystems[idx]} ]
    then
        kubectl delete -f ./global-systems/${globalsystems[idx]}
    fi
done