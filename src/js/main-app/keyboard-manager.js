import  { normal_handle } from './kb/normal-mode-manager';
import  { insert_handle } from './kb/insert-mode-manager';
import  { visual_handle } from './kb/visual-mode-manager';
import { mw, current_mode, MODE } from './start.js';

export class KeyboardManager {
     constructor(){
          // get keyup and keydown events
          mw.webContents.on('before-input-event', (event, input) => {
               this.handle(input);
          });
     }

     handle(input) {
          if (input.type === 'keyDown') {
               switch(current_mode) {
                    case MODE.NORMAL:
                         normal_handle(input);
                         break;
                    case MODE.INSERT:
                         insert_handle(input);
                         break;
                    case MODE.VISUAL:
                         visual_handle(input);
                         break;
               } 
          }
     }
}