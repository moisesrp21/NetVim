function manageKeyNormalMode(event) {
	switch(event.key) {
	case "j":
		action.move_cursor_down();
		break;
	case "k":
		action.move_cursor_up();
		break;		
	case "l":
		action.move_cursor_left();
		break;		
	case "h":
		action.move_cursor_right();
		break;		
	case " ":
		console.log(buffer[index_y][index_x]);
		break;		
	case "i":
		action.change_mode(MODE.INSERT);
		break;		
	case "Escape":
		action.change_mode(MODE.NORMAL);
		break;		
	}
}