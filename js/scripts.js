var ones = ["I", "X", "C", "M"];
var fives = ["V", "L", "D"]
var decimalArray = [];
var decimalResults = [];

var romanize = function(decimalInput) {

  var stringArray = decimalInput.split("");

  stringToNumber(stringArray);

  debugger;
  var ind = 0;
  decimalArray.forEach(function(element) {
    console.log(element);
    if (element <= 3) {
      for (var i = 0; i < element; i++) {
        decimalResults.unshift(ones[ind]);
      }
    } else if (element === 4) {
      decimalResults.unshift(ones[ind] + fives[ind]);
    } else if (element <= 8) {
      decimalResults.unshift(fives[ind]);
      for (var i = 0; i < (element - 5); i++) {
        decimalResults[0] = decimalResults[0].concat(ones[ind]);
      }
    } else {
      decimalResults.unshift(ones[ind] + ones[(ind + 1)]);
    }
    ind++;
  });
  console.log(decimalArray);
  console.log(decimalResults);

  var result = decimalResults.join("");

  return result;
}

var stringToNumber = function(array) {
  array.forEach(function(element){
    decimalArray.push(parseInt(element));
  });
  decimalArray.reverse();
  var i = 0;
  decimalArray.forEach(function(element){
    // element = element * (10 ** i);
    decimalArray.splice(i, 1, element);
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
