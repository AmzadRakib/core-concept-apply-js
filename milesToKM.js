function mileToKilometer(miles) {
    const kilometer = miles * 1.609;
    return kilometer;
}

const distance = 2;
const convertKM = mileToKilometer(distance);
console.log(convertKM);