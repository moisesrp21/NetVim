// update width and height of each character
window.api.set_cursor_dmsn((event) => {
     const char_ele = document.getElementById('00');
     event.sender.send('updated:cursor-dmsn',{
          width: char_ele.clientWidth,
          height: char_ele.clientHeight
     });
});
window.api.move_cursor((_event, cursor) => {
     let cursor_html = document.getElementById("netvim-cursor-id") 
     cursor_html.style.top = cursor.y+"px";
     cursor_html.style.left = cursor.x+"px";
});