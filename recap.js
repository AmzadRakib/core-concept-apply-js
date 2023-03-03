// 1. variable 
var myName = 'Rakib';

// math operation : +, -, *, /
// shorhand : +=, -- *= /=
// ++, --

// 2. array 

var friends = ['abul', 'babul', 'cabul', 'dabul'];
// find elelment via index 
var thirdFriend = friends[2];
// console.log(thirdFriend);

// 3. conditional 
// >, <, >=, <= , ==, ===, !=, !==
if (friends.length < 2) {
    console.log('ato kom friend diya hobe na ');

}
else {
    console.log('well tomar friend tahole valoi');
}

// 4. loop 

var num = 0;
while (num <= 10) {
    num++;
    console.log(num);
}

for (i = 0; i <= 10; i++) {
    console.log(i);
}

// 5. function 
function avarageNumber(assingment1, assingment2, assingment3) {
    var totalNumber = assingment1 + assingment2 + assingment3;
    var avarage = totalNumber / 3;
    return avarage;
}
var assingment1Marks = 58;
var assingment2Marks = 50;
var assingment3Marks = 55;
var myAvarage = avarageNumber(assingment1Marks, assingment2Marks, assingment3Marks);
console.log("my avarage so far:", myAvarage);

// 6. object 

var dekstop = {
    processor: 'i5',
    genaration: '12th gen',
    mohterboard: 'assus tuf gamming',
    ram: '16 GB'
}