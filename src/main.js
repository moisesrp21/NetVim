document.addEventListener ("keypress", (event) => {
	manageKeys(event);
});


function manageKeys(event) {
	switch(event.key) {
	case "j":
		cursor_down();
		break;
	case "k":
		cursor_up();
		break;		
	}
}