import { cursor, MODE, setCurrentMode } from '../start';

function insert_handle(input) {
     switch(input.key) {
          case "Escape":
               setCurrentMode(MODE.NORMAL);
               cursor.updateCursorWidth(MODE.NORMAL);
               break;
     }
}

export { insert_handle };