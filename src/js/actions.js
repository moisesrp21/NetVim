function move_cursor_down() {
	index_y++;
	cursor_y += char_height;
	cursor.style.top = cursor_y+'px';
}

function move_cursor_up() {
	index_y--;
	cursor_y -= char_height;
	cursor.style.top = cursor_y+'px';
}

function move_cursor_left() {
	index_x++;
	cursor_x += char_width;
	cursor.style.left = cursor_x+'px';
}

function move_cursor_right() {
	index_x--;
	cursor_x -= char_width;
	cursor.style.left = cursor_x+'px';
}

function change_mode(new_mode) {
	current_mode = new_mode;
}