1.Set up your project directory and navigate to it in your terminal.
2.Run npm init -y to initialize a new Node.js project.
3.Install Express.js by running npm install express.
4.Create a file named app.js (or any other name you prefer) and add the following code:
5. npm install express-fileupload


This was for a new app
To use it for an existing app

1. npm install express express-fileupload
2. Create Server.js 
3. Add the UploadForm() function to the Typing.js


To run the express server and react app together we need to install 

npm install --save-dev concurrently

set a proxy in package.json of our react app
"proxy": "http://localhost:5000"

Update the Scripts of of package.json
"scripts": {
  "start": "react-scripts start",
  "server": "node server.js",
  "dev": "concurrently \"npm run server\" \"npm start\""
}


Then to run the server and app use
npm run dev