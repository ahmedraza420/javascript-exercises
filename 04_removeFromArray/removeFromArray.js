const removeFromArray = function(array, ...itemsToRemove) {
for (const item of itemsToRemove)
    {
        while(array.indexOf(item) >= 0)
            {
                array.splice(array.indexOf(item), 1);
            }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
