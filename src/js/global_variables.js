// MODE
const MODE = {
     NORMAL: Symbol("NORMAL"),
     INSERT: Symbol("INSERT"),
     VISUAL: Symbol("VISUAL")
}
let current_mode = MODE.NORMAL;

// coordinates on buffer
let index_x = 0;
let index_y = 0;

// buffer
let buffer = [
     Array.from("Moises is Great"),
     Array.from("Moises is Great"),
     Array.from("Moises is Great"),
     Array.from("Moises is Great")
];

// coordinates on editor
let cursor_x = 0;
let cursor_y = 0;

// character dimensions
let char_height = 18;
let char_width = 8;

// elements
let cursor = document.getElementById("netvim-cursor-id")
// var cursor_elem = document.getElementById("2");
// var cursor_numb = document.getElementById("p2");