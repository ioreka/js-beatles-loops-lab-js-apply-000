function theBeatlesPlay(musicians, instruments) {
  var returnArr = [];
  for(let i = 0; i < musicians.length; i++) {
    returnArr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
console.log(returnArr)
return returnArr
}

function johnLennonFacts(array) {
  var facts = [];
  let i = 0;
  while(i < array.length) {
    facts.push(array[i] + `!!!`)
    i++
  }
  return facts
}

function iLoveTheBeatles(number) {
  var array = [];
  var i = 0;

do {
    text += `I love the Beatles!` + i;
    i++;
}
while (i < 15);
}