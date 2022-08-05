const { contextBridge, ipcRenderer } = require('electron')
import {receiveFromMain} from './ipc-renderer'

contextBridge.exposeInMainWorld('electronAPI',{
     openFile: () => ipcRenderer.invoke('dialog:openFile')
})