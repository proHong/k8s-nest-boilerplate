#!/bin/bash

Dependencies=("docker" "kubectl")

for Dependence in "${Dependencies[@]}"; do
    if ! command -v $Dependence &> /dev/null
    then
        echo "$Dependence could not be found"
        exit 1
    fi
done

echo "Success"
exit 1