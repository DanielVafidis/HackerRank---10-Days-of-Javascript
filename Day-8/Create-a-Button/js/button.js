function myFunction() {
    let element = document.getElementById("btn");
    let cpt = element.innerHTML;
    cpt++;
    element.innerHTML = `${cpt}`;
}