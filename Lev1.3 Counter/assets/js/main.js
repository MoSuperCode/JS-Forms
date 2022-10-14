let count = 0;
function plusOne() {
    count ++;
    document.getElementById("count").innerHTML=count
}
function minusOne() {
    count --;
    document.getElementById("count").innerHTML=count
}

function plusTen() {
    count = count+10;
    document.getElementById("count").innerHTML=count
}
function minusTen() {
    count =count-10;
    document.getElementById("count").innerHTML=count
}

function plusHun() {
    count =count+100
    document.getElementById("count").innerHTML=count
}
function minusHun() {
    count =count-100
    document.getElementById("count").innerHTML=count
}

function reset() {
    count =0
    document.getElementById("count").innerHTML=count
}
function multiTwo() {
    count =count*2
    document.getElementById("count").innerHTML=count
}

