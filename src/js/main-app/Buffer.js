export class Buffer {
     constructor(x,y) {
          this.arr = [
               ["M","o","i", "s", "e", "s", " ", "i", "s", " ", "G", "r", "e", "a", "t" ],
               ["M","o","i", "s", "e", "s", " ", "i", "s", " ", "G", "r", "e", "a", "t" ],
               ["M","o","i", "s", "e", "s", " ", "i", "s", " ", "G", "r", "e", "a", "t" ],
               ["M","o","i", "s", "e", "s", " ", "i", "s", " ", "G", "r", "e", "a", "t" ],
          ];
          this.x = x;
          this.y = y;
          this.num_of_lines = this.arr.length;
     }

     setNumberOfLines(number_of_lines) {
          this.num_of_lines = number_of_lines;
     }

     getLineLength(line_num) {
          return this.arr[line_num].length;
     }
}