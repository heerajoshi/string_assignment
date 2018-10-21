let string=process.argv[2];
let vowels="aeiou"
let count=0;
for(let character=0;character < string.length;character++){
  for(let i=0;i<vowels.length;i++){
    if(string[character]==vowels[i]){

      count++
    }

  }
}
console.log(count); 
