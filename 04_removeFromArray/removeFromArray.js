const removeFromArray = function(array, ...args) {
    resultArray = []
    for (let item of array) {
        let match = false;
        for (let arg of args) {
            if (item === arg) {
                match = true;
                break;
            }
        }
        if (match) {
            continue;
        } else {
            resultArray.push(item)
        }
    }
    return resultArray;
};

// Do not edit below this line
module.exports = removeFromArray;
