import { ipcMain } from 'electron';
import { mw, cursor } from './start';

export class IPC_Main_Manager {

     constructor() {
          // getting response from renderer process 
          ipcMain.on('updated:cursor-dmsn',(_event, dmsn) => {
               cursor.char_width = dmsn.width;
               cursor.char_height = dmsn.height;
          });
     }
     send(event,value) {
          mw.webContents.send(event,value);
     }
}
