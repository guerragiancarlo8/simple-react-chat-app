# Simple Electron Chat App

## What is it

A simple chatting application built using React + Node + Socket.io. The Application:

1. Logs users in
2. Lists Which people are online by displaying their chosen username at the right
3. Input of message and it reaches all connected users
4. Users can see all messages in real-time

## How to use

Building and launching the application is as simple as one command ;) Before we get to that, make sure you have nodeJs and NPM installed.

In the root directory of the project, run the following:

1. npm run build

This command will install all required dependencies, launch webpack, and finally prepare our application by transpiling it with the help of babel and others.

## Troubleshooting

You should not have any problems getting everything set up, but just in case here are some suggestions:

1. Validate that NodeJS is at it's most recent version. Some packages may not be able to handle older versions of Node or npm

2. Make sure localhost port 3000 is free. This is the entry point of the application in development/test mode, so make sure it is free from obstruction.

3. If running 'npm run build' gave an error, try running 'npm run recompile'. If that does not work. run all commands separately. If the error persists, please let me know and I will get to it.
