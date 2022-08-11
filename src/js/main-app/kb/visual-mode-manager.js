import { cursor, MODE, setCurrentMode } from '../start';

function visual_handle(input) {
     switch(input.key) {
          case "Escape":
               setCurrentMode(MODE.NORMAL);
               cursor.updateCursorWidth(MODE.NORMAL);
               break;
     }
}

export { visual_handle };