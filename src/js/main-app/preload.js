const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api',{
     set_cursor_dmsn: (callback) => ipcRenderer.on('update:cursor-dmsn',callback),
     move_cursor: (callback) => ipcRenderer.on('cursor:move',callback),
     change_cursor_width: (callback) => ipcRenderer.on('cursor:change-width',callback),
     insert_text: (callback) => ipcRenderer.on('text:insert',callback) 
})