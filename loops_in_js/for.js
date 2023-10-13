// let i = 0;
// do {
//   i += 1;
//   console.log(i);
// } while (i < 6);


// const n = 5;


// for (let i = 1; i <= n; i++) {
//     console.log("Sushant Patial");
// }

// const gameName = new String('sushant-SP')
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('s'));

// const newString = gameName.substring(0,4)
// console.log(newString)

// const newStringOne = " Sushant       "
// console.log(newStringOne)
// console.log(newStringOne.trim());

// const score = 400

// const balance = new Number(100)

console.log("This is string")

function getVowels(str) {
    var vowelsCount = 0;
  
    //turn the input into a string
    var string = str.toString();
  
    //loop through the string
    for (var i = 0; i <= string.length - 1; i++) {
  
    //if a vowel, add to vowel count
      if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
        vowelsCount += 1;
      }
    }
    return vowelsCount;
  }



  