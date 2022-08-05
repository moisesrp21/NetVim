const { app, BrowserWindow, ipcMain, dialog} = require('electron')
const path = require('path')
import { sendMainToRenderer } from './ipc-main';
import { ipc_renderer } from './ipc-renderer';

try {
     require('electron-reloader')(module)
} catch (_) {}
   
let mw;   

function createWindow () {
     const mw = new BrowserWindow({
     webPreferences: {
          preload: path.join(__dirname, 'preload.js'),
          contextIsolation: true,
          titleBarStyle: "hiddenInset",
     }
  })
     mw.loadFile('./src/index.html')
     // Open the DevTools.
     mw.webContents.openDevTools();
}

app.whenReady().then(() => {
     createWindow()
     sendMainToRenderer(mw);
     
     app.on('activate', function () {
          if (BrowserWindow.getAllWindows().length === 0)
          createWindow()
     })
})

app.on('window-all-closed', function () {
     if (process.platform !== 'darwin') app.quit()
})