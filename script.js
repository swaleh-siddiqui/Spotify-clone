let main = document.querySelector(".main-content");
main.addEventListener("wheel", (event) => {
    let head = document.querySelector("header");
    if (event.deltaY > 0){
        head.style.backgroundColor = "#121212ff";
    }
    else if (event.deltaY < 0){
        head.style.backgroundColor = "#12121200";
    }
    
})









let songLengthMin = 2;
let songLengthSec = 54;


let range = document.querySelector(".song-range");
range.addEventListener("input", () =>{
    let val = range.value;
    let pstart = document.querySelector(".start-range");
    let pend = document.querySelector(".end-range");
    let line = document.querySelector(".line");
    line.style.width = val + "%";
    let totalSec = songLengthMin*60 + songLengthSec;
    let currentSec = Math.round(val/100 * totalSec);
    let sec = currentSec % 60;
    let min = Math.floor(currentSec / 60);
    pstart.innerText = min + ":" + sec;
    pend.innerText = songLengthMin + ":" + songLengthSec;
})
let rang = document.querySelector(".range-outer")
rang.onmouseover = () =>{
    let line = document.querySelector(".line");
    line.style.backgroundColor = "rgb(74, 205, 74)";
    range.style.overflow = "visible";
}
rang.onmouseout = () =>{
    let line = document.querySelector(".line");
    line.style.backgroundColor = "white";
    range.style.overflow = "hidden";
}












let volrange = document.querySelector(".vol-range");
volrange.addEventListener("input", () =>{
    let val = volrange.value;
    let line = document.querySelector(".vol-line");
    line.style.width = val + "%";
})
let volrang = document.querySelector(".vol-outer")
volrang.onmouseover = () =>{
    let line = document.querySelector(".vol-line");
    line.style.backgroundColor = "rgb(74, 205, 74)";
    volrange.style.overflow = "visible";
}
volrang.onmouseout = () =>{
    let line = document.querySelector(".vol-line");
    line.style.backgroundColor = "white";
    volrange.style.overflow = "hidden";
}









let nav1 = document.querySelector(".hidenav1");
let nav2 = document.querySelector(".hidenav2");
let sidebar = document.querySelector(".sidebar");
let minisidebar = document.querySelector(".minisidebar")
let libOption = document.querySelector("#lib-img");
libOption.addEventListener("click", () => {
    sidebar.style.display = "none";
    minisidebar.style.position = "static";
    if (screen.width > 710){
        nav1.style.display = "list-item";
        nav2.style.display = "list-item";
    }
});
let minilibimg = document.querySelector("#mini-lib-img");
minilibimg.addEventListener("click", () => {
    console.log(screen.width)
    if(screen.width > 710) {
        sidebar.style.display = "list-item";
        nav1.style.display = "none";
        nav2.style.display = "none";
    }
    else {
        sidebar.style.display = "list-item";
        sidebar.style.position = "absolute";
        sidebar.style.zIndex = "3";
    }
    minisidebar.style.position = "absolute";
});

