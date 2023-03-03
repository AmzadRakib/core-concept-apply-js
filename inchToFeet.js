function inchToFeet(inches) {
    const feet = inches / 12;
    return feet;
}

const myInches = 70;
const myFeet = inchToFeet(myInches);
console.log('My height:', myFeet, 'Feet,');

const jahirIncehs = 65;
const jahirFeet = inchToFeet(jahirIncehs);
console.log('Jahir Height:', jahirFeet, 'Feet,');