function countBs(str){
    var count = "";
    for (var i = 0; i < str.length; i++){
        if (str.charAt(i) === "B") {
            count += "B";
        }
    }
    return count;
}

console.log(countBs("BABBS"));


function countChar(str, char){
    var count = "";
    for (var i = 0; i < str.length; i++){
        if (str.charAt(i) === char) {
            count += char;
        }
    }
    return count;
} 

console.log(countChar("abracadabra", "r"));