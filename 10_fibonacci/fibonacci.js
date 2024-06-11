const fibonacci = function(n) {
    if (n < 0) {
        return 'OOPS';
    }
    
    let curr = 0
    let prev = 1 
    for (let i = 0; i < n; i++) {
        let tmp = prev + curr;
        prev = curr
        curr = tmp 
    }
    return curr

};

// Do not edit below this line
module.exports = fibonacci;