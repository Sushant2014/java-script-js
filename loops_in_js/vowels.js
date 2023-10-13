let string ="Sushant Patial"
let vowelsCount = 0
for (var i = 0; i <=string.length - 1; i++) {
    if ('aeiou'.includes(string[i].toLowerCase())) {
      vowelsCount += 1;
    }
  }
  console.log(vowelsCount)
  console.log(string.trim().length)