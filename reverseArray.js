
//reverses an array and returns a new array
function reverseArray(arr){
    var newArr = [];
    for (var i = arr.length-1; i>=0; i--){
        newArr.push(arr[i]);
        }
    return newArr;
}

console.log(reverseArray([1,2,"a",-1]));

//modifies the array passed, does not create a new array
function reverseInPlace(arr){
    var times = Math.floor(arr.length/2);
    console.log(times);
    for (var i = 0; i <= times; i++){
        var last = arr.length-1-i;
        console.log(last);
        var holdit = arr[i];
        arr[i] = arr[last];
        arr[last] = holdit;
        console.log(arr);
        }
    return arr
}
console.log(reverseInPlace([3,55,"q","b", false]));

//should return:  [false, "b", "q", 55, 3]