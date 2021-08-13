//document.defaultView.addEventListener("load",() =>
 //   console.log("wydarzenie"));


function a() {
    const x = 1;
    function b() {
        console.log('Domknięcie: ', x)
    }

    return b;
}

const yy = a();
yy();

(function teraz() {
    console.log('Wywołaj')
}());

//import funkcja, * as abc from "./modules/modul.js"

//console.log(abc.zm1);
//funkcja();
//abc.zm1 = 10;


/* Klasy */

class Klasa {
    constructor(a, b) {
        this.x = a;
        this.y = b;
    }

    gimmeXY() {
        return this.x * this.y;
    }
}

var k1 = new Klasa(6, 9);
console.log(k1.gimmeXY());

class Klasa2 extends Klasa {
    constructor(a,b,c) {
        super(a,b);
        this.z = c;
    }

    gimmeXYZ() {
        return super.gimmeXY() * this.z;
    }
}

var k2 = new Klasa2(5, 15, 25);
console.log(k2.x);
console.log(k2.y);
console.log(k2.z);
console.log(k2.gimmeXYZ());

function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;

    this.funkcja = function() {
        this.dlugosc = 10;
    };
}

Dog.prototype.bark = function () {
    console.log("Szczeka");
}

var pies = new Dog("burek", "jamnik", 12);
console.log(pies.name);

if (pies instanceof Dog) {
    console.log("pies jest instancją Dog");
}

delete pies.weight;
console.log(pies.weight);
pies.bark();

pies.funkcja();
console.log(pies.dlugosc);

function t() {
    return [1,2,3];
}
var [,b] = t();
console.log(b);

function o() {
    return {
        x: 4,
        y: 5,
        z: 6
    }
}

var {x: x, y: y, z: z} = o();
console.log(x, y, z);

console.log(false && "napis");

var p = new Promise( function(resolve, reject) {

})

setTimeout(() => {
    console.log("Czas")
}, 500)


var obiekt ={
    x: 10,
    y() {
        console.log(this.x);
    }
}

obiekt.y();

var ob ={
    x: 3,
    y: 4,
    z: 5,
    x: 14
};
var {x: x, ...y} = ob;
var newob = {
    ...ob, 
    x: 12
};

console.log(newob);