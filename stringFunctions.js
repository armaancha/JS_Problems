// functional programming

let wordCount = 0;
let letterCount = 0;
let wordStart = false;
let startIndex = 0;
let endIndex = 0;
let longestCount = 0;
let longestStartIndex = 0;

// Prints the reverse of a given string
// Example: "hello world" prints "dlrow olleh"
function reverseString(x) {
  let y = x.split("");
  for (i = 0; i < y.length / 2; i++) {
    let temp = y[i];
    y[i] = y[y.length - 1 - i];
    y[y.length - 1 - i] = temp;
  }
  
  console.log(y.join(""));
}

// Prints the number of words in a string
// Example: "jack went to the park" prints 5
function countWords(x) {
  for (i = 0; i < x.length; i++) {
    if (x[i] != " ") {
      if (i==x.length-1){
        wordCount++;
      }
      letterCount++;
      wordStart = true;
    }
    else {
      if (wordStart==true){
        wordCount++;
      }
      wordStart = false;
    }
  }
  console.log(wordCount + " words");
  console.log(letterCount + " characters");
  console.log(x.length + " characters (with spaces)")
}

// Prints the length of the longest word in a sentence
// Example: "jack went to the movie theater" prints 7
function longestWord(x) {
  for (i = 0; i < x.length; i++) {
    if (x[i] != " ") { //not space
      if(wordStart == false){
        wordStart = true;
        startIndex = i;
      }
      letterCount++;
      if (i==x.length-1){
        if(wordStart==true && letterCount>longestCount){
          longestCount = letterCount;
          longestStartIndex = startIndex;
        }
      }
    }
    else{ //space
      if(wordStart==true && letterCount>longestCount){
        longestCount = letterCount;
        longestStartIndex = startIndex;
      }
      wordStart = false;
      letterCount = 0;
    }
  }
  console.log("The longest count is " + longestCount);
}

function reverseWord(x, start,end){
  for(let i=start;i<=(start+end)/2;i++){
    let temp = x[i];
    x[i] = x[end-(i-start)];
    x[end-(i-start)] = temp;
  }
}

// Prints the reverse of each word in a string while maintaining the order of the words
// Example: "jack went to the park" prints "kcaj tnew ot eht krap"
function reverseWordString(s){
  let x = s.split("");
  for(let i=0;i<x.length;i++){
    if(x[i]==" "){
      if(wordStart){
        endIndex = i-1;
        reverseWord(x, startIndex, endIndex);
      }
      wordStart = false;
    }
    else{
      if(!wordStart){
        startIndex=i;
      }
      if(i==x.length-1){
        endIndex=i;
        reverseWord(x, startIndex, endIndex);
      }
      wordStart = true;
    }
  }
  console.log(x.join(""));
}

// Tests of the functions above
reverseString("hello world")
countWords("Jack went to the park")
longestWord("Jack went to a movie theater")
reverseWordString("Jack went to the park")


