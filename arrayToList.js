// see also: http://www.i-programmer.info/programming/javascript/5328-javascript-data-structures-the-linked-list.html
// see also: http://www.nczonline.net/blog/2009/04/13/computer-science-in-javascript-linked-list/

function arrayToList(arr) {
    var list = null;
    var length = arr.length-1;
    for (var i = length; i >= 0; i--){
        list = {value:arr[i], rest:list};
    }
    return (list);
}



var myList = arrayToList([1,2,3]);

function prepend(element, list){
  list = {value:element, rest:list};    
  return list;
}

function nth(number, list){
    
}


prepend(4, myList);

console.log(myList);

function listToArray(list) {
    var arr = [];
    for (var node = list; node; node = node.rest){
        arr.push(node.value);   
    }
    return arr;
}
console.log(listToArray(myList));