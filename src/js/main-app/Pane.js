/**
 * this class represents a subwindow area of text input 
 * Therefore, there is a buffer associalted with it.
 */
import { Buffer } from './Buffer';
import {
     ipc,
     cursor
} from './netvim';


export class Pane {
     constructor() {
          this.buffer = new Buffer(0,0);
     }

     insertChar(char) {
          char = (char == ' '? '&nbsp' : char)
          ipc.send("text:insert", {
               x: this.buffer.x,
               y: this.buffer.y,
               key: char
          });
          cursor.moveRight();
     }
}