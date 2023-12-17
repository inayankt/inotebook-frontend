# iNoteBook

This is the frontend part of iNoteBook project.

## About

A web app where notes can be saved and retrieved from on the go. Users need to signin/signup with their account and can start saving notes.

## How to run the react app

### Prerequisites

- NodeJS should be installed on your computer. Download it from [here](https://nodejs.org/en/download).
- MongoDB should be installed on your computer. Downlaod it from [here](https://www.mongodb.com/try/download/community) (select `Community Server` and download).
- Visual Studio Code is preferred for this guide. Download it from [here](https://code.visualstudio.com/download).
- The backend part of the project must be running on your computer. Click [here](https://github.com/inayankt/inotebook-backend/) to view the guide.

### Getting started

Open terminal in your computer and run the following commands
```
git clone https://github.com/inayankt/inotebook-frontend/
cd inotebook-frontend
npm install
code .
```

The project folder will open in VS code. Make a new `.env` file which will contain the environment variables in the same format as given in `.env.example` file. Then run
```
npm start
```

The website will be live on `http://localhost:3000`.