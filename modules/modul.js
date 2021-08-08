export var zm1 = 10;
export var zm2 = 11;

function abc() {
    console.log("wewnątrz funkcji");
}

//taki sposób eksportu umożliwia zmianę wartości abc
export {abc as default};

/*
//taki sposób zapisu powoduje że przekazujemy abc jako wyrażenie bez wartości
//a więc późniejsza ewentualna zmiana abc nie wpłynie na to co
//przekazaliśmy
export default function abc() {
    console.log("wewnątrz funkcji");
}
//można by również zapisać
export default abc;
*/