var vowels = ["a", "e", "i", "o", "u"]
var count = 0;
var initialChar= "";
var secondChar = ""; // COME BACK AND USE SLICE
var that = '';

var pigLatin = function(string) {

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
      if (initialChar === "Q" && secondChar === "u") {
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
