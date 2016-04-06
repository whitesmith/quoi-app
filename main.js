'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

/* Start game server */
const ServerConfig = require('./build/server/config.js').default;
const Server = require('./build/server/server.js').default;
new Server(ServerConfig);

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let gameMasterWindow;
let tvWindow;

function createWindows() {
  // Create the browser window.
  gameMasterWindow = new BrowserWindow({width: 800, height: 600});
  tvWindow = new BrowserWindow({width: 800, height: 600});

  // and load the index.html of the app.
  gameMasterWindow.loadURL('file://' + __dirname + '/game/public/master.html');
  tvWindow.loadURL('file://' + __dirname + '/game/public/tv.html');

  if (process.env.NODE_ENV === 'development') {
    // Open the DevTools.
    gameMasterWindow.webContents.openDevTools();
    tvWindow.webContents.openDevTools();
  }

  // Emitted when the window is closed.
  gameMasterWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    gameMasterWindow = null;
    app.quit();
  });

  tvWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    tvWindow = null;
    app.quit();
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', createWindows);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (gameMasterWindow === null && tvWindow === null) {
    createWindows();
  }
});