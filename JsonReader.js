document.getElementById("answer").addEventListener(search);
var targetAns = document.getElementById("answer").value;
var actualAns = 
var n = str.search("answer");
document.getElementById("demo").innerHTML = n;
if(n > -1) {
  document.getElementById("demo").innerHTML = "Correct";
} else {
  document.getElementById("demo").innerHTML = "False";
}
var compareData = function(output) {
  var answer = false;
  if(output = "test") {
  answer = true;
  }
  return answer;
}
loadJson = function(jsonFile) {
var mydata = JSON.parse(jsonFile);
}
