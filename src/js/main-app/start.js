/**
 * file initializing global variables
 */

import { Cursor } from './Cursor';
import { KeyboardManager } from './keyboard-manager';
import { IPC_Main_Manager } from './ipc-main';
import { Buffer } from './Buffer';

export let kb;
export let cursor;
export let buffer;
export let mw;
export let ipc;
export let MODE = {
     NORMAL: Symbol("NORMAL"),
     INSERT: Symbol("INSERT"),
     VISUAL: Symbol("VISUAL")
}
export let current_mode = MODE.NORMAL;
export function setCurrentMode(newMode) {current_mode=newMode;}

export function init (mainWindow) {
     mw = mainWindow;
     kb = new KeyboardManager();
     cursor = new Cursor(0,0);
     buffer = new Buffer(0,0);
     ipc = new IPC_Main_Manager();
     mw.webContents.on('did-finish-load', () => {
          mw.webContents.send("update:cursor-dmsn");           
     });
}