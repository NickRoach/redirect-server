This is a server which accepts HTTP requests without SSL encryption from the wind sensor-sender and then POSTs that request body to a lambda function with https. This is necessary because lambdas will not accept unencrypted http requests

To run locally: nodemon postToLambda.js

To deploy: git push heroku main

note: it is necessary to include the node modules

To set the target URL of the deployed application: heroku config:set TARGET_URL={url to pass data to}