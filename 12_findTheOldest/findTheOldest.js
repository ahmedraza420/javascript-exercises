const findTheOldest = function(arrOfObj) {
    return arrOfObj.reduce((oldest, curr) =>  (findAge(oldest.yearOfBirth, oldest.yearOfDeath) < findAge(curr.yearOfBirth, curr.yearOfDeath)) ? curr : oldest);
};

function findAge(birth, death) {
    return death ? death - birth : (new Date().getFullYear()) - birth;
}
// Do not edit below this line
module.exports = findTheOldest;
