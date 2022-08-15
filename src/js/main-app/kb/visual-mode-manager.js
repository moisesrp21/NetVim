import { 
     cursor, MODE, editor 
} from '../netvim';

function visual_handle(input) {
     switch(input.key) {
          case "Escape":
               editor.setCurrentMode(MODE.NORMAL);
               cursor.updateWidth();
               break;
     }
}

export { visual_handle };