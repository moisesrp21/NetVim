import { Cursor } from './Cursor';
import { KeyboardManager } from './keyboard-manager';

export let kb;
export let cursor;
export let mw;
export let MODE = {
     NORMAL: Symbol("NORMAL"),
     INSERT: Symbol("INSERT"),
     VISUAL: Symbol("VISUAL")
}
export let current_mode = MODE.NORMAL;

export function init (mainWindow) {
     mw = mainWindow;
     kb = new KeyboardManager();
     cursor = new Cursor(0,0);
     mw.webContents.on('did-finish-load', () => {
          mw.webContents.send("update:cursor-dmsn");           
     });
}