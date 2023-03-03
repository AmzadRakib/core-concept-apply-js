// function getSumOfAnArray(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         const index = i;
//         const elemnt = numbers[index];
//         sum = sum + elemnt;
//         // console.log(index, elemnt, sum);
//     }
//     return sum;
// }

// function getOddNumberOfArray(numbers) {
//     const oddNumbers = [];
//     for (let i = 0; i < numbers.length; i++) {
//         const element = numbers[i];
//         if (element % 2 !== 0) {
//             // console.log(i, element);
//             oddNumbers.push(element);
//         }
//     }
//     return oddNumbers;
// }

// const myNumbers = [12, 45, 65, 78, 32, 47, 91];
// const oddNumbers = getOddNumberOfArray(myNumbers);
// console.log(oddNumbers);
// getSumOfAnArray(myNumbers);


function getSumOfAnArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element;
        // console.log(sum);
    }
    return sum;
}

function getOddNumberOfArray(numbers) {
    const oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element % 2 !== 0) {
            // console.log(element);
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}

const myNumbers = [33, 53, 66, 34, 65, 36, 63];
const oddNumbers = getOddNumberOfArray(myNumbers);
console.log(oddNumbers);
const oddNumberSum = getSumOfAnArray(oddNumbers);
console.log('Odd Number Sum Is:', oddNumberSum);