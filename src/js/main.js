
// import {globalShortcut} from 'electron';

document.addEventListener ("keydown", (event) => {
	event.preventDefault();
	manageKeys(event);
});

function manageKeys(event) {
	console.log(event.key);
	switch(event.key) {
	case "j":
		move_cursor_down();
		break;
	case "k":
		move_cursor_up();
		break;		
	case "l":
		move_cursor_left();
		break;		
	case "h":
		move_cursor_right();
		break;		
	case " ":
		console.log(buffer[index_y][index_x]);
		break;		
	case "i":
		change_mode(MODE.INSERT);
		break;		
	case "Escape":
		change_mode(MODE.NORMAL);
		break;		
	}
}