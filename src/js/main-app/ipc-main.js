import { ipcMain } from 'electron';
import { mw, cursor, buffer } from './start';

export class IPC_Main_Manager {
     constructor() {
          // getting response from renderer process 
          ipcMain.on('updated:cursor-dmsn',(_event, dmsn) => {
               cursor.char_width = dmsn.width;
               cursor.char_height = dmsn.height;
          });
          ipcMain.on('updated:inserted-text',(_event, data) => {
               buffer.updateBuffer(data.line_number, data.new_line);
          });
     }
     send(event,value) {
          mw.webContents.send(event,value);
     }
}
