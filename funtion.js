
function callback(result){
    console.log("the result is " + result);
}
function sum(a,b,cb){
    cb(a+b); 
}

sum(1,2,callback)
