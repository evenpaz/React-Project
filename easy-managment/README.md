# Run client locally:

1. `cd client` then run `npm i`
2. run `npm run dev`

# Run server locally:

1. `cd server` then run `npm i`

2. Update .env file with those vars:
   `PORT` = <number>
   `SERVER_DOMAIN` = <your domain>
   `MONGO_URI` = <your mongo uri>
   `ADMIN_USER_NAME` = <your admin user name>
   `ADMIN_USER_PASSWORD` = <your admin password>
   `ADMIN_EMAIL_SERVICE` = <your email service like: smtp-mail.outlook.com | gmail | ... >
   `ADMIN_EMAIL_USERNAME` = <your admin email userName>
   `ADMIN_EMAIL_PASSWORD` = <your admin email password>
   `ACCESS_TOKEN_SECRET` = <your-secret>
   `REFRESH_TOKEN_SECRET` = <your-refresh-secret>

3. run `npm start`

# add whatsapp chat link:

in client side->
WhatsAppBtn component->
whatsAppLink= https://wa.me/<phone number with country code>>
note- dont forget country code (+972/+1/..) >>
