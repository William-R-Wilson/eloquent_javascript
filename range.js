function range(start, end, step){
    var arr = [];
    if (step === undefined || isNaN(step)) step = 1;
    
    if (start > end) {
        for (var i = start; i >= end; i-= step) {
            arr.push(i);
        }   
    }
    else {
        for (var i = start; i <= end; i+= step) {
            arr.push(i);
        }
    }
    return arr;
}

console.log(range(1,10, 2));
console.log(range(10,1,2));
console.log(range(-1, 10));
console.log(range(-1,-10));
console.log(range(-1,12,5));

function sum(arr){
    var total = 0;
    for (var num in arr) {
        total += arr[num];
    }
    return total;
}

console.log(sum(range(1,10)));
