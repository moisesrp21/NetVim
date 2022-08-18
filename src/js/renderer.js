// update width and height of each character
let cursor_html = document.getElementById("netvim-cursor-id") 
let line;
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

window.api.insert_text((_event, value) => {
     //coordinates
     let x = value.x;
     let y = value.y;
     // new element
     line = document.getElementById(y);
     let newEle = line.insertCell(x);
     newEle.innerHTML = value.key;
     // update buffer
     let new_line = line.innerText.replace(/\t/g,'');
     _event.sender.send('buffer:update',{
          line_number: y,
          new_line: new_line
     });
});

window.api.delete_character((_event, value) => {
     console.log(`x: ${value.x}, y: ${value.y}`);
     let x = value.x;
     let y = value.y;
     line = document.getElementById(y);
     line.deleteCell(x);
     // update buffer
     let new_line = line.innerText.replace(/\t/g,'');
     _event.sender.send('buffer:update',{
          line_number: y,
          new_line: new_line
     });
})