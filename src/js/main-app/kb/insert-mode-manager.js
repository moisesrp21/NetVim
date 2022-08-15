import { 
     MODE,
     cursor,
     current_pane,
     netvim
} from '../netvim'

export function insert_handle(input) {
     switch(input.key) {
          case "Escape":
               netvim.setMode(MODE.NORMAL);
               cursor.updateWidth(MODE.NORMAL);
               break;
          default:
               insertChar(input);
               break;
     }
}

function insertChar(input) {
     current_pane.insertChar(input.key);
}