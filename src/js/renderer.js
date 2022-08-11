// update width and height of each character
let cursor_html = document.getElementById("netvim-cursor-id") 

window.api.set_cursor_dmsn((event) => {
     const char_ele = document.getElementById('00');
     event.sender.send('updated:cursor-dmsn',{
          width: char_ele.clientWidth,
          height: char_ele.clientHeight
     });
});

window.api.move_cursor((_event, cursor) => {
     cursor_html.style.top = cursor.y+"px";
     cursor_html.style.left = cursor.x+"px";
});

window.api.change_cursor_width((_event, width) => {
     cursor_html.style.width = width+"px";
});