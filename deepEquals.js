function deepEqual(value1, value2){
  if (value1 === value2) {
    return true;
  }
  if (typeof value1 === "object" && value1 !== null  && typeof value2 === "object" && value2 !== null){
    var propsIn1 = 0, propsIn2 = 0;
    for (var prop in value1) {
        propsIn1 += 1;
    }
    for (var prop in value2) {
        propsIn2 += 1;
    	if (!(prop in value1) || !deepEqual(value1[prop], value2[prop])){
        return false; 
    }

  }
    return propsIn1 == propsIn2;
}
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// true
console.log(deepEqual(obj, {here: 1, object: 2}));
// false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));