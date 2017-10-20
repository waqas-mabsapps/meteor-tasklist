####To update npm Globally:
npm i -g npm


####To Install meteor

####To create an application:
meteor create <project_name>


####To run application:
meteor (in the project directory)

####To add authentication behaviour:
meteor add accounts-ui accounts-password

####To add bcrypt in meteor:
meteor npm install --save bcrypt

####To add babel-runtime in meteor:
meteor npm install --save babel-runtime


####To Secure the overall application:
meteor remove insecure

######Once We implement the remove insecure system will not work so server side CRUD behaviour will be added

####To add a record in mongo:
######From Browser Inspect Element
In Console
Tasks.find.fetch()
Tasks.insert({name:'Task One',created_at:new Date()})