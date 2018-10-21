let string = process.argv[2];
let sreach = process.argv[3];
let count = 0;
for(i=0;i<string.length;i++){
  let wordFormed = "";
  for(j=i; j<sreach.length + i; j++){
    wordFormed=wordFormed + string[j];
  }
  if(wordFormed == sreach){
    count++;
  }
}
console.log(count);
