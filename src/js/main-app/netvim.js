/**
 * file initializing global variables
 * and defines class Netvim which can modify
 * the settings for the app
 */
import { KeyboardManager } from './KeyboardManager';
import { Pane } from './Pane';
import { IPC } from "./IPC";
import { Cursor } from './cursor/Cursor';

export let mw;
export let current_pane;
export let kb;
export let ipc;
export let cursor;
export let MODE = {
     NORMAL: Symbol("NORMAL"),
     INSERT: Symbol("INSERT"),
     VISUAL: Symbol("VISUAL")
}
export let current_mode;
export let netvim;

export function init (mainWindow) {
     mw = mainWindow;
     current_pane = new Pane();
     kb = new KeyboardManager();
     ipc = new IPC();
     cursor = new Cursor(0,0);
     current_mode = MODE.NORMAL;
     netvim = new Netvim();

     mw.webContents.on('did-finish-load', () => {
          mw.webContents.send("update:cursor-dmsn");           
     });
}


export class Netvim {
     setMode(newMode) {
          current_mode = newMode;
     }
}