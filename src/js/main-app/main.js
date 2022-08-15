/**
 * main.js the entry to point of this app which is responsible for: 
 * @version 1.0.0
 */
import { init } from './netvim';

const { app, BrowserWindow } = require('electron');
const path = require('path');


/**
 * Refresh app.
 * Development purpose
 */
try {
     require('electron-reloader')(module)
} catch (_) {}
   
app.whenReady().then(() => {
     // creating a window and settings for the window
     createWindow(); 

     app.on('activate', function () {
          if (BrowserWindow.getAllWindows().length === 0) {
               createWindow()
          }
     })
});

function createWindow() {
     let mw = new BrowserWindow({
          // frame: false,
          titleBarStyle: "hiddenInset",
          webPreferences: {
               preload: path.join(__dirname, 'preload.js'),
               contextIsolation: true,
          },
     });

     // loads the UI for the app
     mw.loadFile('./src/index.html');

     // Open the DevTools.
     // mw.webContents.openDevTools();

     // init global variables used in the application
     init(mw);
}

app.on('window-all-closed', function () {
     if (process.platform !== 'darwin') app.quit()
})