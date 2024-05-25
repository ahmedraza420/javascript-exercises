const fibonacci = function(index) {
    let n1 = 0, n2 = 1, curr = 0;
    if (index < 0) return 'OOPS';
    if (index>0 && index<=2) return 1;  
    for (let i = 2; i <= index; i++){
                    curr = n1 + n2;
                    n1 = n2;
                    n2 = curr;
        }
    return curr;
};

// Do not edit below this line
module.exports = fibonacci;
