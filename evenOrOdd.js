function isEven(n){
    if(n === 0){
        return true;
    }
    if(n === 1){
        return false;
    }
    else{
        return isEven(n-2);
    }
    
}

console.log(isEven(5));
