#!/bin/bash

git stash
git pull --rebase
bash start_server_prod.sh & bash start_client_prod.sh