const palindromes = function (str) {
    const saniString = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return saniString.split("").reverse().join("") === saniString;
};

// Do not edit below this line
module.exports = palindromes;
