#!/bin/bash
pip3 install -r requirements.txt
pip3 install mysqlclient
python3 manage.py check
./make_style.sh
python3 manage.py collectstatic
python3 manage.py compilemessages
python3 manage.py compilejsi18n
python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py loaddata navbar
python3 manage.py loaddata language_small
python3 manage.py loaddata demo
service redis-server start
supervisorctl update
supervisorctl status
nginx -t
service nginx reload
supervisorctl restart site bridged celery wsevent
service nginx restart
