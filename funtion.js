
function callback(result){
    console.log("the result is " + result);
}
function sum(a,b,cb){
    cb(a+b); 
}

sum(1,2,callback)


// fat arrow funtion
// first way of use a arrow function
const myArrow = (a, b) => a+b

console.log(myArrow(15, 15))

// second way of use a arrow funtion
const mySecondArrow = (a, b) => {
    return a + b
}

console.log( mySecondArrow(15,15))
