const fibonacci = function(num) {
    if (num < 0) return "OOPS"
    if (num == 0) return 0

    let current = 1;
    let prev = 0
    for (let i=1; i<num; i++) {
        let total = current + prev;
        prev = current;
        current = total;
    }
    return current;
};

// Do not edit below this line
module.exports = fibonacci;
