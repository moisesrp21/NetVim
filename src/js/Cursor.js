class Cursor {
     constructor(cursor_html, x,y) {
          this.x = x;
          this.y = y;
          this.cursor_html = cursor_html;
     }
     move_cursor_down() {
          index_y++;
          y += char_height;
          cursor_html.style.top = y+'px';
     }
     
     move_cursor_up() {
          index_y--;
          y -= char_height;
          cursor_html.style.top = y+'px';
     }
     
     move_cursor_left() {
          index_x++;
          x += char_width;
          cursor_html.style.left = x+'px';
     }
     
     move_cursor_html_right() {
          index_x--;
          x -= char_width;
          cursor_html.style.left = x+'px';
     }
}

exports.Cursor = Cursor;