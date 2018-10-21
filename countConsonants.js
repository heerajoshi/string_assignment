let string=process.argv[2];
let count=0;
let consonants="bcdfghjklmnpqrstvwxyz"
for(let character=0;character < string.length;character++){
  for(let i=0;i<consonants.length;i++){
    if(string[character] == consonants[i]){

      count++
    }
  }

}
console.log(count);
