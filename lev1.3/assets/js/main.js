function alter() {
    const first = document.getElementById("first").value;
    const second = document.getElementById("second").value;
    const difference = first-second;
    document.getElementById("difference").innerHTML = difference
}