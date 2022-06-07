const number = parseInt(prompt("Enter a positive number:"));
let isprime = true;
if(number === 1) {
  console.log("1 is neither prime nor composite number.");
}
else if (number > 1) {

  for (let i  = 2; i < number; i++ ){
    if (number % i == 0 ){
      isprime  = false;
      break;
    }
  }
  if (isprime){
    console.log('${number} is a prime number');
  } else{
    console.log('${number} is not a prime number');
  }
}