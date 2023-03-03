function checkEven(number) {
    const remainder = number % 2;
    if (remainder === 0) {
        return true;
    }
    else {
        return false;
    }
}
const myNumberIsEven = checkEven(444);
console.log(myNumberIsEven);
const herNumberIsEven = checkEven(3443);
console.log(herNumberIsEven);