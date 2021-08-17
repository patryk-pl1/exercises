const obiekt = {
    a: 1,
    b: 2,
    c: 3,
}

for (let param in obiekt) {
    console.log(`${param} oraz ${obiekt[param]}`);
    console.log(param)
}