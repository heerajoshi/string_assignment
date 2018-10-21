let ispalindrome = process.argv[2];
let lengthForCheck = ispalindrome.length - 1;
let massage = "it is not a palindrome" ;
for(let index=0;index <= ispalindrome.length/2;index++){
  if(ispalindrome[index] == ispalindrome[lengthForCheck-index]){
  let  massage = "it is a palindrome";
    index=ispalindrome.length;
  }
}
console.log(massage);
