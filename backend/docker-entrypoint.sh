#!/bin/sh

echo 'Making migrations...'
pipenv run python ./reserva_project/manage.py makemigrations
echo 'Migrating...'
pipenv run python ./reserva_project/manage.py migrate

# TODO: ver se precisa adequar de acordo com o ambiente (AWS e afins)
echo 'Runserver...'
pipenv run python ./reserva_project/manage.py runserver 0.0.0.0:8000
