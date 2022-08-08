import { IPC_Main_Manager } from './ipc-main';
import { mw, cursor } from './start.js';

export class KeyboardManager {
     constructor(){
          this.ipc_mm = new IPC_Main_Manager();
          mw.webContents.on('before-input-event', (event, input)=>{
               this.handle(event,input);
          });
     }

     handle(event, input) {
          if (input.type === 'keyDown') {
               switch(input.key) {
                    case "j":
                         cursor.move_down();
                         break;
                    case "k":
                         cursor.move_up();
                         break;
                    case "l":
                         cursor.move_right();
                         break;
                    case "h":
                         cursor.move_left();
                         break;
               }
               this.ipc_mm.sendMainToRenderer({x: cursor.x, y: cursor.y})
          }
     }
}