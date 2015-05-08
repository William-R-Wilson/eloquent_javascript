// see also: http://www.i-programmer.info/programming/javascript/5328-javascript-data-structures-the-linked-list.html

function arrayToList(arr) {
    var list = {};
    var length = arr.length-1;
    for (var i = length; i >= 0; i--){
        list = {value:arr[i], rest:list};
    }
    return (list);
}

var myList = arrayToList([1,2,3]);

console.log(myList);

function listToArray(list) {
    var arr = [];
    for (var node = list; node; node = node.rest){
        arr.push(node.value);   
    }
    return arr;
}
console.log(listToArray(myList));