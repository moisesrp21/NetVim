import { ipcMain } from 'electron';
import { 
     mw, 
     cursor, 
     current_pane 
} from './netvim';

export class IPC {
     constructor() {
          // getting response from renderer process 
          ipcMain.on('updated:cursor-dmsn',(_event, dmsn) => {
               cursor.char_width = dmsn.width;
               cursor.char_height = dmsn.height;
          });
          ipcMain.on('buffer:update',(_event, data) => {
               current_pane.buffer.updateBuffer(data.line_number, data.new_line);
          });
          ipcMain.on('updated:deleted-character',(_event, data) => {
               current_pane.buffer.updateBuffer(data.line_number, data.new_line);
          });
     }
     send(event,value) {
          mw.webContents.send(event,value);
     }
}
