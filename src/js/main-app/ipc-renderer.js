import {ipcRenderer} from 'electron';

export function receiveFromMain(msg) {
     ipcRenderer.on(msg, (event, data) => {
          alert(data);
     });
}