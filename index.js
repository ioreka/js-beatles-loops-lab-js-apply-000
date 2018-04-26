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
  
}



+function johnLennonFacts(array){
+  let i = 0;
+  let newArray = [];
+  while (i < array.length) {
+   newArray.push(array[i] + "!!!")
+   i++
+  }
+  return newArray
+}