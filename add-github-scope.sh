#!/bin/bash

scope() {
    echo '🚀 @palekh'
    contents="$(jq '.name = "@palekh/" + .name' ./package.json)" && \
    echo "${contents}" > ./package.json
}

scope
