var romanize = function(decimalInput) {
  var result = "I";
  return result;
}



$(function() {
  $("form#form").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("#decimal").val());
    console.log(userInput);
    $("#result").text(romanize(userInput));
  });
});
