var decimals = [1, 5, 10, 50, 100, 500, 1000];
var romans = ["I", "V", "X", "L", "C", "D", "M"];
var decimalArray = [];

var romanize = function(decimalInput) {

  var stringArray = decimalInput.split("");

  stringToNumber(stringArray);
  console.log(decimalArray);

  var decimalResults = [];
  for (var i = 0; i < decimalInput; i++) {
    decimalResults.push(1);
  }



  var result = romans[decimals.indexOf(decimalInput)];

  return result;
}

var stringToNumber = function(array) {
  array.forEach(function(element){
    decimalArray.push(parseInt(element));
  });
  decimalArray.reverse();
  var i = 0;
  decimalArray.forEach(function(element){
    element = element * (10 ** i);
    decimalArray.splice(i, 1, element);
    console.log(decimalArray);
    i++;
  });
}


$(function() {
  $("form#form").submit(function(event){
    event.preventDefault();
    var userInput = $("#decimal").val();
    $("#result").text(romanize(userInput));
  });
});
