import {BrowserWindow} from 'electron';

export function sendMainToRenderer(mw) {
     mw.webContents.send('foo', 'do something for me');
}
