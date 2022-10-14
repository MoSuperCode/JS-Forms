function alter() {
    const birthdate = document.getElementById("birthdate").value;
    let date = 2022 ;
    const alter = date - birthdate
    document.getElementById("output").innerHTML = alter
}