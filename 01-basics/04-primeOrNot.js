function primeOrNot(num) {
    if (num <= 1) {
        console.log("the number", num, "is not prime");
        return "Not Prime";
    }
    for( i = 2;i<num;i++){
        if(num%i==0){
            return "Not Prime";
        }
    }
    return "Prime";
}
const num =7;
const isPrime = primeOrNot(num);
console.log("the number" ,num ," is", isPrime);