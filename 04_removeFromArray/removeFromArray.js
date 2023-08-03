const removeFromArray = function(arr1, ...args) {
    const newArr = arr1.filter((item) => {
        return (!args.includes(item))
    });
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
