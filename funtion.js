
function callback(result){
    console.log("the result is " + result);
}
function sum(a,b,cb){
    cb(a+b); 
}

sum(1,2,callback)


// fat arrow funtion

const myArrow = (a, b) => a+b

console.log(myArrow(15, 15))
