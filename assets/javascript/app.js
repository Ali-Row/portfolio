function docReady(fn) {

    if (document.readyState === "complete" || document.readyState === "interactive") {

        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}  

let intro = document.getElementById('intro');

intro.onclick(console.log('hi'));