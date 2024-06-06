const repeatString = function(string, n) {
    if (n < 0) {
        return 'ERROR'
    }
    resultString = ''
    
    for (let i = 0; i < n; i++) {
        resultString += string
    }
    return resultString
};

// Do not edit below this line
module.exports = repeatString;