function before() {
         // document.write('javacript');
        // document.writeln('elith');
        // alert('chile');

        // declearing variables
        var a = 1;
        a=3;
        console.log('a = ',a);

        let b = 'chile';
        b='seth';
        console.log('b = ', b);

        const c = true;
      
        console.log('c = ', c);
        console.log('seth');

        console.log('c is a typeOf = ', typeof(b));
        console.log('the length of b is', b.length);

        // string and string methods
        let number = 2;
        let names = String(number);
        console.log(names);
        console.log(typeof(names));
        console.log(names.length)
        let address = 'No. 14 Ada George Road';
        console.log(address.indexOf('14'));
console.log(address + ' off Ikwerre Road');
console.log(address.concat('off Location Junction'));
console.log(address.slice(5));
console.log(a + 7);

// number and number methods
let aa = 6; bb = 5;
console.log('...................')
console.log(aa + bb);
console.log(aa * bb);
console.log(aa ** bb);
console.log(aa / bb);
console.log(aa - bb);
console.log(aa % bb);
let pi = Math.PI;
console.log(Math.round(pi));
console.log(Math.floor(pi));
console.log(Math.ceil(pi));
console.log(Math.cos(pi));
console.log(Math.pow(2, 3));
console.log(Math.random(10))

// boolean and null types

let Checked = false;
console.log(Checked);

let FirstName = null;
let lastName = null;
let email = null;
console.log(email);

// day 2
// objects 
console.log('................ day2 ..................');
let ages = {
        age1: 25,
        age2: 10,
        sum: (a, b)=> {
                return a + b;
        }

}

console.log(ages.age1)
ages.age2 = 45;
console.log(ages.sum(ages.age1, ages.age2));

// Arrays
let debt = [100, 1000,2,5000, 3000,2, 400, 2, 800,2, 200];
debt[10] = 700;
console.log(debt[6])
debt.push(2);
debt.unshift(50);
debt.pop();
debt.pop();
debt.shift();
console.log('does 100 exist in debt?', debt.indexOf(2));

console.log('the length of debt is: ', debt.length);
console.log(debt);
// loops
//   while {for while loop not to run forever and crash your pc, the condition
//must change within the loop}
let i = 1;
while (i <= 10) {
        i++; 
       
        if (i == 5) {
                // break;
                continue;
        }
        console.log('i = ', i);
 }


// do while
do {
        i++;
        console.log('dowhile i is: ', i);
        
} while (i<=15);
// for 
for (let j = 0; j <= 10; j++) {
        console.log('j = ', j);
}
// using for loop with arrays
for (i = 0; i < debt.length; i++) {
        console.log('the content of debt are: ',debt[i])
}

const user = [
        {
                FirstName: 'chile',
                lastName: "amadi",
                email: 'amadichile@gmail.com',
                password: 'chilex'
        },
        {
                FirstName: 'seth',
                lastName: "nkwo",
                email: 'sethnkwo@gmail.com',
                password: 'sethz'
        },
        {
                FirstName: 'rich',
                lastName: "mond",
                email: 'richmond@gmail.com',
                password: 'richz'
        },
        {
                FirstName: 'elite',
                lastName: "path",
                email: 'elitepath@gmail.com',
                password: 'elitez'
        },
];

// higher array methods

 // foreach
 user.forEach(x => {
         console.log(x.FirstName, ' : ', x.email);
 });

 // map
let allPas = user.map(x => {
        if (x.password) {
                return x.password;
        }
});
console.log(allPas);
 // filter
let allEmail = user.filter((x) => x.FirstName != 'seth');
console.log(allEmail);
// to understand filter, sort and map, let use number array
let nums = [1, 2, 33, 5, 66, 77, 90, 23, 48, 11, 16, 89, 100, 0, 3];
let times2 = nums.map(x => x * 2);
console.log('nums: ', nums)
console.log('times2', times2);
let evens = nums.filter(x => x % 2 == 0);
let odds = nums.filter(x => x % 2 == 1);
console.log('evens : ', evens);
console.log('odds : ', odds);
let userNames = ['seth', 'chile', 'yuel', 'elite', 'richmond', 'levi', 'adam'];
console.log('unsorted : ', userNames);
let sorted = userNames.sort();
console.log('sorted: ', sorted);
let ascending = nums.sort((a,b)=> a-b);
console.log('ascending: ', ascending);
 //sort

 // reduce
let addNums = nums.reduce((a,b) => { return a-b });
console.log('addNums: ', addNums);

}

//...................................
const tim = (a, b)=> {  // arrow funciton
        return a * b;
}


console.log(add(6, 9));
console.log(tim(2, 4));

// functions
function add(a,b) { // a funciton with funciton keyword
        return a + b;
};

// Problem: write a pseudocod algorithm tha gets all the even and odd numbers from a given digit.
  //steps: 
  // get the  number
  // start a loop
  // while the loop is on: 
     // extract the even and odd numbers and save them in different arrays
  // return the even and odd numbers
  
function evenOdd(d,n) {
        let even = [], odd = [];
        for (let i = 0; i <= d; i++) {
                if (i % 2 == 0) {
                        //is even
                        even.push(i);
                }
                else {
                        // is odd
                        odd.push(i);
                }
                if (even.length == n || odd.length == n) {
                        break;
                }
        }
        return {even, odd }
  }

// let { even, odd } = evenOdd(20,5);
// console.log('even is: ', even);
// console.log('odd is: ', odd);

// tenary operator or shorthand ifelse
let network = false;
let access = true;

// if (network == true) {
//         console.log('internet Access');
// }
// else {
//         console.log('no internet Access!');
// }
(network) ? console.log('internet Access') : console.log('No internet Access');
  
access && console.log('app opened');  //condinal rendering
let x = prompt('what is your Name:');
switch (x) {
        case 'seth':
                console.log('welcome Mr. Seth!');
                break;
        case 'chile':
                console.log('welcome Mr. Chile!');
                break;
        case 'elite':
                console.log('welcome Mr. Elite!');
                break;
        default:
                console.log('user not found');
}