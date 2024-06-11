const findTheOldest = function(people) {
    const sortedPeople = people.sort((a, b) => {
        if ((a.yearOfDeath || 2024) - a.yearOfBirth > (b.yearOfDeath || 2024) - b.yearOfBirth) {
            return -1
        } else {
            return 1
        }
    })
    return sortedPeople[0]
};

// Do not edit below this line
module.exports = findTheOldest;
