System setup

Backend

Laravel *part* 

Run *composer install*

edit .env file 

    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=news_db
    DB_USERNAME=root
    DB_PASSWORD=
    
Then run migration

*php artisan migrate*

php artisan serve --host=0.0.0.0 --port=8003


front-end 

React js

    npm install
    npm run start




