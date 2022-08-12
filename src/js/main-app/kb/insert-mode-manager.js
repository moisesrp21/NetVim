import { cursor, MODE, setCurrentMode, ipc, buffer } from '../start';

export function insert_handle(input) {
     switch(input.key) {
          case "Escape":
               setCurrentMode(MODE.NORMAL);
               cursor.updateCursorWidth(MODE.NORMAL);
               break;
          default:
               insertChar(input);
               break;
     }
}

function insertChar(input) {
     console.log(input.key);
     let value = {
          x: buffer.x,
          y: buffer.y,
          key: input.key
     }
     cursor.move_right();
     ipc.send("text:insert",value);
}