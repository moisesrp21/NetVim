import { ipcMain } from 'electron';
import { mw, cursor } from './start';
export class IPC_Main_Manager {

     constructor() {
          ipcMain.on('updated:cursor-dmsn',(_event, dmsn) => {
               cursor.char_width = dmsn.width;
               cursor.char_height = dmsn.height;
          });
     }
     sendMainToRenderer(cursor_dmsn) {
          mw.webContents.send('cursor:move', cursor_dmsn);
     }
}
