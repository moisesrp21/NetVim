import { cursor, MODE, setCurrentMode } from '../start';

function normal_handle(input) {
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
          case "i":
               setCurrentMode(MODE.INSERT);
               cursor.updateCursorWidth(MODE.INSERT);
               break;
          case "v":
               setCurrentMode(MODE.VISUAL);
               break;
     }
}

export { normal_handle };