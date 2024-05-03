const sumAll = function(start, end) {
if (start < 0 || end < 0 || !Number.isInteger(start) || !Number.isInteger(end))    return "ERROR";
let sum = 0;
let loopStart = start < end ? start : end;
let loopEnd = start < end ? end : start;
for (loopStart; loopStart <= loopEnd; loopStart++)    sum += loopStart;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
