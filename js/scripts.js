
$(document).ready(function() {
  $("form").submit(function(event) {
    var userInput = $("input#pigLatin").val();
    var result = pigLatin(userInput);
    $("div#result").text(result);
    // $("#result").show();
    // console.log();
    event.preventDefault();
  });

});

function pigLatin(string) {

  var vowels = ["a", "e", "i", "o", "u"]
  var count = 0;
  var initialChar= "";
  var secondChar = ""; // COME BACK AND USE SLICE
  var that = '';

  for (var i = 0; i < vowels.length; i++) {
    if (string.charAt(0) === vowels[i]) {
     return string + "ay";
    }
  }

  for (var i = 0; i <= vowels.length; i++) {
    if (string.charAt(0) != vowels[i]) {
      count++;
      initialChar = string.charAt(0);
      secondChar = string.charAt(1);
      if ((initialChar === "Q" || initialChar === "q" ) && secondChar === "u") {
        //take the "qu" and put it at the end
        initialChar = string.slice(0,2);
        initialChar= initialChar.toLowerCase();
        that = string.slice(2);
        return that + initialChar + "ay";
      }
      else if(count === 5) {
        initialChar = string.charAt(0);  //Works
        initialChar = initialChar.toLowerCase();
        that = string.slice(1);
        return string = that + initialChar + "ay";
      }
    }
  }


}
