
var przycisk = document.getElementById('klik');
przycisk.onclick = (e) => 
    console.log(e);

class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
}

console.log(typeof Car);