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

////function animate(element, {top, left}){
////    return new Promise((resolve) => {
 ////       setTimeout(() => {
////            if (top !== undefined){
////                element.style.top = top;
////            }
////
 ////           if (left !== undefined){
////                element.style.left = left;
////            }
////            resolve();
////        }, 3000)
////    });
////}

//animate(box, {left: '400px'})
//    .then(() => animate(box, {top: '400px'}))
 //   .then(() => animate(box, {left: '100px'}))
 //   .then(() => animate(box, {top: '100px'}));

// Promise based - oparte o promisie

//const request = fetch("http://api.nbp.pl/api/exchangerates/rates/A/chf/?format=json")
//console.log(response);
//request
//    .then((response) => response.json())
//    .then((data) => console.log(data.rates[0].mid))
//    .catch(() => console.log('Something is no yes!'))

// trzeci sposob
//async function getData(code){
//    const response = await fetch(`http://api.nbp.pl/api/exchangerates/rates/A/${code}/?format=json`);
 //   const data = await response.json();
 //   return data.rates[0].mid
//}
//
//const showData = async () => {
//    const result = await getData('eur');
//    console.log(result)
//    return result;
//}

//getData('eur');
//showData().then((r) => console.log(r));

// this informacje!!!!!!!!!!!!

function createPlayer(name) {
    return {
        score: 0,
        name,
        updateScore() {
            player.score++;
        }
    }
}

const player = createPlayer('Janusz K');

console.log(player.score);
player.updateScore();
console.log(player.score);