document.addEventListener ("keypress", (event) => {
	manageKeys(event);
});


function manageKeys(event) {
	switch(event.key) {
	case "j":
		// cursor_down();
		break;
	case "k":
		// cursor_up();
		break;		
	case "l":
		if (index_buffer<buffer.length) {
			index_buffer++;
			char_width = (buffer[index_buffer]===' ')? 8 : 7;
			move_cursor_left();
		}
		break;		
	}
}