const reverseString = function(string) {
    let resultString = ''
    let n = string.length
    for (let i = n - 1; i >= 0; i--) {
        resultString += string[i]
    }
    return resultString
};

// Do not edit below this line
module.exports = reverseString;
