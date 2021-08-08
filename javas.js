document.defaultView.addEventListener("load",() =>
    console.log("wydarzenie"));


function a() {
    const x = 1;
    function b() {
        console.log('Domknięcie: ', x)
    }

    return b;
}

const y = a();
y();

(function teraz() {
    console.log('Wywołaj')
}());

import {zm1, zm2} from "./modules/modul.js";

console.log(zm1);
console.log(zm2);
