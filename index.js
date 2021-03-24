// Add your functions here
// In this lab, you should write a generalized map and reduce function. Both of these functions will take an Array and a function and require that you pass information between the function and the callback. Write your code in the index.js file.

function map(sourceArray, ffunction) {
    const resultingArray = [];
    for (const element of sourceArray) {
        resultingArray.push(ffunction(element));
    }
    return resultingArray;
}

// expect(reduce(sourceArray, function(e, memo){return e + memo})).to.equal(6)

function reduce(sourceArray, ffunction, startingPoint) {
    let memo = (!startingPoint) ? sourceArray.shift() : startingPoint;

    for (const element of sourceArray) {
        memo = ffunction(element, memo);
    }
    
    return memo;
}
