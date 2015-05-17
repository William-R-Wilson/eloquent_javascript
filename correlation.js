//weresquirrel example:  how to calculate correlation

//use a 4 element array to represent the conditions:\
//squirrelness is the first variable, so:  
//[00, 01, 10, 11] - where the first bite represents if squirrelness is true, the second if pizza is true
// in the example given in the book:  
//[76,9,4,1]

function phi(table) {
    return (table[3]*table[0]-table[2]*table[1]) /
        Math.sqrt   ((table[2] + table[3]) *
                    (table[0] + table[1]) *
                    (table[1] + table [3]) *
                    (table[0] + table[2]));
}

console.log(phi([76,9,4,1]));

function hasEvent(event, entry) {
    return entry.events.indexOf(event) != -1;
}

function tableFor(event, journal) {
    var table = [0,0,0,0];
    for (var i = 0; i < journal.length; i++) {
        var entry = journal[i], index = 0;
        if (hasEvent(event, entry)) index +=1;
        if (entry.squirrel) index +=2;
        table[index] += 1;
    }
    
    return table;
}

//console.log(tableFor("pizza", JOURNAL));

var map = {};
function storePhi(event, phi) {
    map[event] = phi;
}

storePhi("Pizza", 0.069);
storePhi("touched tree", -0.081);
console.log("pizza" in map);
// shoulrd return true
console.log(map["touched tree"]);
//should return -0.081

//to list all the coefficients, use for in:
for (var event in map) {
    console.log("The correlation for " + event + "is " + map[event]);
}

