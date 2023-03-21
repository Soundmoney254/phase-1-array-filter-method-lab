const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(filterArr, name){
    const matchingNames = filterArr.filter(driver => driver.toLowerCase() === name.toLowerCase())
return matchingNames;
};

console.log(findMatching(drivers, 'Bobby'));
console.log(findMatching(drivers, 'Sammy'));

function fuzzyMatch(filterArr,name){
    const indexMatch = filterArr.filter(driver => driver.slice(0, 1) === name.slice(0, 1))
return indexMatch;
}

console.log(fuzzyMatch(drivers, 'Bobby'));

function  matchName(filterArr,name){
    const objMatch = filterArr.filter(driver => driver.name === name)
    return objMatch;
}