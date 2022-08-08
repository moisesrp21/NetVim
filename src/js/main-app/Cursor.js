export class Cursor {
     constructor(x,y) {
          this.x = x;
          this.y = y;
          this.char_height = 18;
          this.char_width = 8;
     }

     move_up() {
          this.y -= this.char_height;
     }

     move_down() {
          this.y += this.char_height;
     }

     move_left() {
          this.x -= this.char_width;
     }

     move_right() {
          this.x += this.char_width;
     }
}