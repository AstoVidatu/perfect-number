//  Perfect Number  
// 
//  A perfect number is a positive integer that is equal to the sum of its factors.   
//  That is, the sum of its positive divisors excluding the number itself.
//  The smallest perfect number is 6;
//  Its proper divisors are 1, 2 and 3, and 1+2+3 = 6. 
// 
//  JS function for checking if a number is perfect.
//  ~AstoVidatu

var n = 6;

function factors(n) {
	var sum = 0;
    for (var i = 1; i <= n-1; i++) {

        if (n % i == 0) {
            sum += i;
        }
    }

    if(sum == n){
    	console.log("True")
    }
    else{
    	console.log("False")
    }  
}

factors(n);

