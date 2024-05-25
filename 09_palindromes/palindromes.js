const palindromes = function (str) {
    let stringArray = str.split('');
    let cleanArray = [];
    // let cleanStr = cleanArray.join('');
    for (char of str)
        {
            if ((((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) || (char >= 0 && char <= 9)) && char != ' ')
            {
                cleanArray.push(char.toLowerCase());
            }
        }
        // console.log(cleanArray.reverse().join(''), cleanStr);
    return cleanArray.join('') == cleanArray.reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
