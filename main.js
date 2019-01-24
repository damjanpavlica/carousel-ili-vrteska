/*** VARIJABLE ***/

const slika = document.getElementById('slika');
const levo = document.getElementById('levo');
const desno = document.getElementById('desno');

const niz = [
    'slike/slika1.jpg', 
    'slike/slika2.jpg', 
    'slike/slika3.jpg', 
    'slike/slika4.jpg', 
    'slike/slika5.jpg'
];

let index = 0;

/*** FUNKCIJE ***/

function sledeci() {
    index++;
    if (index == niz.length) {
        index = 0;
    }
    slika.src = niz[index];
}

function prethodni() {
    index--;
    if (index < 0) {
        index = niz.length - 1;
    }
    slika.src = niz[index];
}

/*** DOGADJAJI ***/

desno.addEventListener('click', sledeci)

levo.addEventListener('click', prethodni)

window.addEventListener('keydown', function(event) {
    if (event.keyCode == 37) prethodni();
    if (event.keyCode == 39) sledeci();
});

/*** INIT ***/

setInterval(sledeci, 3000);
