

const primNumber = (numbers) => {
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] <= 1) {
            continue; 
        }
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(numbers[i]); j++) {
            if (numbers[i] % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            result.push(numbers[i]);
        }
    }
    return result;
}

var numbers = [2, 7, 8, 9, 8, 6, 84, 1, 3, 5, 11, 121, 17];
console.log(primNumber(numbers)); 




const PalindromeChecker = (mystring)=>{
    if (typeof mystring === 'string'){
        for (let i = 0; i < mystring.length / 2; i++) {
            if (mystring[i] !== mystring[mystring.length - 1 - i]) {
                return  mystring+" not  a pallindrome"
            }
        }
        return mystring+" is a  pallindrome " 
    }else{
        return "This is not a string "+mystring
    }
    
}
var mystring =4
console.log(PalindromeChecker(mystring))



const reverseNumbers = (num) => {
    if (typeof num === "number") {
        num = num.toString(); 
        let result = [];
        for (let i = num.length - 1; i >= 0; i--) {
            result.push(parseInt(num[i])); 
        }
        return result;
    } else {
        return "Please enter a valid number";
    }
}

var num = 548584;
console.log(reverseNumbers(num)); 


