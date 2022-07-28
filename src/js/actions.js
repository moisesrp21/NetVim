function cursor_down() {
	if (cursor_line<6) {
		cursor_elem.className = "";
		cursor_numb.className = "";
		cursor_line++;
		cursor_elem = document.getElementById(cursor_line.toString());
		cursor_numb = document.getElementById("p"+cursor_line.toString());
		cursor_elem.className = "cursor_line";
		cursor_numb.className = "cursor_line";
	}
}

function cursor_up() {
	if (cursor_line>1) {
		cursor_elem.className = "";
		cursor_numb.className = "";
		cursor_line==0? cursor_line : cursor_line--;
		cursor_elem = document.getElementById(cursor_line.toString());
		cursor_numb = document.getElementById("p"+cursor_line.toString());
		cursor_elem.className = "cursor_line";
		cursor_numb.className = "cursor_line";	
	}
}

function move_cursor_left() {
	let x_string = cursor.style.left.replace('px','');
	let x = parseInt(x_string, 10);
	cursor.style.left = `${x+char_width}px`;
}
