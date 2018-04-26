function theBeatlesPlay(musicians, instruments) {
  var 

for (letBeatlesIndex = 0; BeatlesIndex < musicians.length; BeatlesIndex++) {
  console.log(`${musicians} plays ${instruments}`)
}
}


function theBeatlesPlay(musicians, instruments) {
+  var returnArr  = [];
+  for(let i = 0; i < musicians.length; i++){
+    returnArr.push(musicians[i] + " plays " + instruments[i])
+  }
+  console.log(returnArr)
+  return returnArr
+}