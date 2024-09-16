const urlap = document.querySelector("form");
const ujelem = document.getElementById("uj-elem");
const lista = document.getElementById("lista");

function ment() {
    localStorage.bevasarlolista = lista.innerHTML;
}
function betolt () {
    lista.innerHTML = localStorage.bevasarlolista || '';
}
betolt();

function letrehoz(element) {
    lista.innerHTML += '<div class="lista-elem"> <button onclick="torol(this)">&#10006;</button> <button onclick="szerkeszt(this)">&#9998;</button>' + element + '</div>'
    ment();
}

urlap.onsubmit = function(e) {
    e.preventDefault();
    if(!ujelem.value) return;
    letrehoz(ujelem.value);
    ujelem.value = "";
    ujelem.focus();
}

function torol(element) {
    element.parentElement.remove();
    ujelem.focus();
    ment();
}
function szerkeszt(element) {
    ujelem.value = element.parentElement.innerText.substring(3);
    torol(element);
}