import {
     cursor,
     MODE,
     netvim,
     current_pane
} from '../netvim';

export function normal_handle(input) {
     switch(input.key) {
          case "j":
               cursor.moveDown();
               break;
          case "k":
               cursor.moveUp();
               break;
          case "l":
               cursor.moveRight();
               break;
          case "h":
               cursor.moveLeft();
               break;
          case "x":
               current_pane.deleteChar();
               break;
          case "i":
               netvim.setMode(MODE.INSERT);
               cursor.updateWidth();
               break;
          case "v":
               editor.setCurrentMode(MODE.VISUAL);
               break;
     }
}