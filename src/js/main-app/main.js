/**
 * main.js the entry to point of this app which is responsible for: 
 * creating the window and its settings
 * loading the UI
 * pointing to the start.js
 * @version 1.0.0
 */
const { app, BrowserWindow } = require('electron');
const path = require('path');
import { init } from './start';


/**
 * Refresh app.
 * Development purpose
 */
try {
     require('electron-reloader')(module)
} catch (_) {}
   
let mw; // main BrowerserWindow   

function createWindow () {
     mw = new BrowserWindow({
          webPreferences: {
               preload: path.join(__dirname, 'preload.js'),
               contextIsolation: true,
               titleBarStyle: "hiddenInset",
          }
     })
     // loads the UI for the app
     mw.loadFile('./src/index.html')
     // Open the DevTools.
     mw.webContents.openDevTools();
}

app.whenReady().then(() => {
     // creating a window and settings for the window
     createWindow();
     // pointing to the start of the app
     init(mw);

     app.on('activate', function () {
          if (BrowserWindow.getAllWindows().length === 0)
          createWindow()
     })
})

app.on('window-all-closed', function () {
     if (process.platform !== 'darwin') app.quit()
})