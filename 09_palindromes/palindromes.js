const palindromes = function (string) {
    const original = string
    .toLowerCase()
    .split('')
    .filter((char) => char.charCodeAt(0) >= '0'.charCodeAt(0) && char.charCodeAt(0) <= 'z'.charCodeAt(0))
    .join("")

    const reversed = original
    .split('').toReversed().join('')

    return original === reversed
};

// Do not edit below this line
module.exports = palindromes;
