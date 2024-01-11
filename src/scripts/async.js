const box = document.querySelector('.box')

// asynchronous
// 1. Callbacks
// collback hell
//setTimeout(() => {
//    box.style.left = "400px";
//    setTimeout(() => {
//        box.style.top = "400px";
//        setTimeout(() => {
//            box.style.left = "100px";
//            setTimeout(() => {
//                box.style.top = "100px";
//            }, 3000)
//        }, 3000)
//    }, 3000)
//}, 3000)

// 2. Promise (in python Future) implementacja //monady matematycznej
//const receipt = new Promise((resolve, reject) => {
//    setTimeout(() => {
//        resolve('Your kebab may friend')
//    }, 3001)
//
//    setTimeout(() => {
//        reject('I dont speak anglish')
//    }, 3000)
//});
//console.log(receipt);
//receipt
//    .then((kebab) => {console.log(kebab)})
//    .catch((noKebab) => {console.log(noKebab)})
 //   .finally(() => console.log('zawsze'));

function animate(element, {top, left}){
    return new Promise((resolve) => {
        setTimeout(() => {
            if (top !== undefined){
                element.style.top = top;
            }

            if (left !== undefined){
                element.style.left = left;
            }
            resolve();
        }, 3000)
    });
}

animate(box, {left: '400px'})
    .then(() => animate(box, {top: '400px'}))
    .then(() => animate(box, {left: '100px'}))
    .then(() => animate(box, {top: '100px'}));