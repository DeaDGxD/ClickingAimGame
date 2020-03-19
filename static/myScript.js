let doc = document.getElementById("place");
let x = doc.offsetHeight - 100;
let y = doc.offsetWidth - 100;
let hits = 0;
let miss = 0;
document.getElementById("Shooter").addEventListener("click", hit);
function move(x,y) {
    let height = Math.floor(Math.random() * x);
    let width = Math.floor(Math.random() * y);
    let fin = [height, width];
    return fin;
}
function newMove() {
    let el = document.getElementById("Shoot");
    let pos = move(x,y);
    el.style.left = pos[1] + "px";
    el.style.top = pos[0] + "px";
    let size = Math.floor(Math.random() * 30) + 10;
    document.getElementById("Shooter").setAttribute("r", size.toString());
}
function hit() {
    hits = hits+1;
    let h = document.getElementById("hits");
    h.innerHTML = "Times hit:"+hits.toString();
    let accuracy = (hits / (hits + miss) * 100).toString() + "%";
    let m = document.getElementById("missing");
    m.innerHTML = "Times missed: "+miss.toString() + " " + "Accuracy: " + accuracy;
}
function missy() {
    let accuracy = (hits / (hits + miss) * 100).toString() + "%";
    miss = miss + 1;
    let m = document.getElementById("missing");
    m.innerHTML = "Times missed: "+miss.toString() + " " + "Accuracy: " + accuracy;
    newMove()
}