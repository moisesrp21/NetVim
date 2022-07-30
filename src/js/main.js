(function() {
     const electron = require('electron');
})
document.addEventListener ("keydown", (event) => {
     event.preventDefault();
     manageKeys(event);
});

function manageKeys(event) {
     switch(current_mode) {
          case MODE.INSERT:
               // manageKeyInsertMode(event);
               break;
          case MODE.NORMAL:
               manageKeyNormalMode(event);
               break;
          case MODE.VISUAL:
               // manageKeyVisualMode(event);
               break;
     }
}