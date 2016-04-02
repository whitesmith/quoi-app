# quoi-app
A mobile quiz app inspired by Buzz and Dr. Why.
Coded during Whitesmith's Birthday Week in Loural.


## Motivation
Whitesmith loves quizzes. Everytime we gather our
[Quiz Master][quiz-master] always prepares a movie-book-nerd-random kind of
quiz.

We thought it would be fun to implement a Quiz app for mobile phones (where the
fastest team gets more points) during Whitesmith's 4th anniversary celebration week.

[quiz-master]: https://github.com/ruimagalhaes


## Overview
This app is composed by two components: the [mobile app][] and the server
(this repo). This repo contains the Electron application that runs the game
server, the Game Master controls (e.g.: next question, show ranking, etc.) and
the screen that is displayed on the TV/projector.

[mobile app]: https://github.com/whitesmith/quoi-mobile


## Development
### Server

1. `cd src/server`
2. Run `npm install`
3. Run `npm run start-dev`


### game-master and tv apps

1. `cd src/{game-master,tv}`
2. Run `npm install`
3. Start server with `webpack-dev-server --progress --colors`
4. Access http://localhost:8080/public/


### DevTools for game-master and tv

The following steps are not required, but I strongly recommend you to install this:

1. https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi
2. https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd

You'll have two new tabs in Chrome for React and Redux. They're awesome.
