// Code your solutions in this file
for (let age = 30; age < 40; age++) {
  console.log(`I'm ${age} years old. Happy birthday to me!`);
  debugger;
}

const gifts = [`teddy bear`, `drone`, `doll`];
function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }
}
wrapGifts(gifts);

function writeCards(array, event) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray[i] = `Thank you, ${array[i]}, for the wonderful ${event} gift!`;
    debugger;
  }
  return newArray;
}

const newArray = writeCards([`fofo`, `lolo`, 2], `siko`);
console.log(newArray);

function countDown(num) {
  //   for (let i = 0; i <= num; i++) {
  for (num; num >= 0; num--) {
    console.log(num);
  }
}
