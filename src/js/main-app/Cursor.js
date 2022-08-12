import { ipc, buffer, MODE } from './start';

export class Cursor {
     constructor(x,y) {
          this.x = x;
          this.y = y;
          this.char_height = 18;
          this.char_width = 8;
     }

     move_up() {
          if (this.isInsideEditor(buffer.x,buffer.y-1)) {
               buffer.y--;
               this.y -= this.char_height;
               ipc.send('cursor:move', {x: this.x, y: this.y}); 
          }
     }

     move_down() {
          if (this.isInsideEditor(buffer.x,buffer.y+1)) {
               buffer.y++;
               this.y += this.char_height;
               ipc.send('cursor:move', {x: this.x, y: this.y}); 
          }
     }

     move_left() {
          if (this.isInsideEditor(buffer.x-1,buffer.y)) {
               buffer.x--;
               this.x -= this.char_width;
               ipc.send('cursor:move', {x: this.x, y: this.y}); 
          }
     }

     move_right() {
          if (this.isInsideEditor(buffer.x+1,buffer.y)) {
               buffer.x++;
               this.x += this.char_width;
               ipc.send('cursor:move', {x: this.x, y: this.y}); 
          }
     }

     isInsideEditor(x,y) {
          // console.log("----------");
          // console.log(`x = ${x}, y = ${y}`);
          // console.log(`buffer.num_of_lines-1: ${buffer.num_of_lines-1}`);
          // console.log(`buffer.num_of_lines-1: ${buffer.getLineLength(buffer.y)-1}`);
          if (
               y<0 || y>(buffer.num_of_lines-1)
               || x<0 || x>(buffer.getLineLength(y)-1)
          ) {
               // console.log(false);
               return false;
          }
          // console.log(true);
          return true
     }
     updateCursorWidth(mode) {
          let newWidth = (mode === MODE.INSERT)? this.char_width/3 : this.char_width;
          ipc.send('cursor:change-width',newWidth);

     }
}