

// const f1 = (callback) => {
//     setTimeout(() => {
//         console.log('f1');
//         callback();
//     }, 500)
// }
// const f2 = (callback) => {
//     setTimeout(() => {
//         console.log('f2');
//         callback();
//     }, 300)
// }
// const f3 = () => {
//     setTimeout(() => {
//          console.log('f3')
//      }, 100)
//  }

// new Promise ((resolve, reject) => {
//     setTimeout(() => {
//         console.log('1');
//         resolve("to jest z obietnicy");
//     }, 400)
// })
// .then((response) => {
//     console.log("end!");
//     console.log(response);
//     return response;
// })
// .then((res) => {
//     console.log('Res ' + res);
// })

const getUserData = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log('1');
           // resolve("to jest odpowiedź z obietnicy");
           reject('błąd');
        }, 600)
    })
}

getUserData().then((res) => {console.log(res)}).catch(err => console.error(err));

var obietnica = new Promise((resolve, reject) => {
    setTimeout(
        () => {
            console.log('timeout');
            resolve();    
        }, 1000);
})