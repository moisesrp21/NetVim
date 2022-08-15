import {
     MODE,
     current_pane as cp, 
     current_mode as cm,
     ipc
} from '../netvim';

export class Cursor {
     constructor(x,y) {
          this.x = x;
          this.y = y;
          this.char_height = 18;
          this.char_width = 8;
     }
     moveUp() {
          if (this.isInsideEditor(cp.buffer.x, cp.buffer.y-1)) {
               cp.buffer.y--;
               this.y -= this.char_height;
               ipc.send('cursor:move', {x: this.x, y: this.y}); 
          }
     }

     moveDown() {
          if (this.isInsideEditor(cp.buffer.x,cp.buffer.y+1)) {
               cp.buffer.y++;
               this.y += this.char_height;
               ipc.send('cursor:move', {x: this.x, y: this.y}); 
          }
     }

     moveLeft() {
          if (this.isInsideEditor(cp.buffer.x-1,cp.buffer.y)) {
               cp.buffer.x--;
               this.x -= this.char_width;
               ipc.send('cursor:move', {x: this.x, y: this.y}); 
          }
     }

     moveRight() {
          if (this.isInsideEditor(cp.buffer.x+1,cp.buffer.y)) {
               cp.buffer.x++;
               this.x += this.char_width;
               ipc.send('cursor:move', {x: this.x, y: this.y}); 
          }
     }

     isInsideEditor(x,y) {
          if (
               y<0 || y>(cp.buffer.num_of_lines-1)
               || x<0 || x>(cp.buffer.getLineLength(y)-1)
          ) {
               return false;
          }
          return true
     }

     updateWidth() {
          let newWidth = (cm === MODE.INSERT)? this.char_width/3 : this.char_width;
          ipc.send('cursor:change-width',newWidth);

     }
     deleteChar() {
          
     }
}