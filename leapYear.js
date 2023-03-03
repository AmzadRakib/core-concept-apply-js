function isLeapYear(year) {
    const remainder = year % 4;
    if (remainder === 0) {
        return true;
    }
    return false;
}

const myLeapYear = isLeapYear(2000);
console.log('My Birth Year Is Leap Year?', myLeapYear);
const currentLeapYear = isLeapYear(2023);
console.log('This Year Is Leap Year?', currentLeapYear);