function evenOrOdd(num){
    if(num%2==0){
        console.log("the number",num," is even");
        return "Even";
    }
     console.log("the number",num," is odd");
    return "Odd"
}

console.log(evenOrOdd(3));