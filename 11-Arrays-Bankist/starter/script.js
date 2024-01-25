'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const createUsernames = function(accs) {
  accs.forEach(function(acc) {
    acc.username = acc.owner
    .toLowerCase()
    .split(' ')
    .map(function(word) {
    return word[0]
    }).join('')
  })
}

createUsernames(accounts)

const displayMovements = function(movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function(mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
     <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__value">${mov}</div>
     </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function(movements) {
  const balance = movements.reduce(function(sum, mov){
    return sum + mov
  }, 0)
  labelBalance.textContent = `${balance} EUR`
}

const calcDisplaySummary = function(acc) {
  const incomes = acc.movements
  .filter(function(mov) {
    return mov > 0
  })
  .reduce(function(total, mov) {
    return total + mov
  }, 0)

  const outs = acc.movements
  .filter(function(mov) {
    return mov < 0
  })
  .reduce(function(total, mov) {
    return total + mov
  }, 0)

  const interest = acc.movements
  .filter(function(mov) {
    return mov > 0
  })
  .map(function(mov){
    return mov * acc.interestRate / 100
  })
  .filter(function(int) {
    return int >= 1
  })
  .reduce(function(total, mov) {
    return total + mov
  }, 0)

  labelSumIn.textContent = `${incomes} EUR`
  labelSumOut.textContent = `${Math.abs(outs)} EUR`
  labelSumInterest.textContent = `${interest} EUR`
}

// Event Handler
let currentAccount;

btnLogin.addEventListener('click', function(e) {
  e.preventDefault()
  
  currentAccount = accounts.find(function(acc) {
    return acc.username === inputLoginUsername.value 
  })

  if(currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`
    containerApp.style.opacity = 100
  }
  
  inputLoginUsername.value = inputLoginPin.value = ''
  inputLoginPin.blur()

  displayMovements(currentAccount.movements)
  calcDisplayBalance(currentAccount.movements)
  calcDisplaySummary(currentAccount)
})

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

const mvoementsUsd = movements.map(function(mov) {
  return mov * eurToUsd
})

const deposits = movements.filter(function(mov) {
  mov > 0
})

const withdrawals = movements.filter(function(mov) {
  mov < 0
})

const balance = movements.reduce(function(total, mov) {
  return total + mov
}, 0)



/////////////////////////////////////////////////
// Challenge 1

// const checkDogs = function (dogs1, dogs2) {
//   const dogs1Corrected = dogs1.slice(1, -2)
//   const dogs = dogs1Corrected.concat(dogs2)

//   dogs.forEach(function(dog, i) {
//     if (dog > 5) {
//       console.log(`Dog number ${i + 1} is an adult and is ${dog} years old`)
//     } else {
//       console.log(`Dog number ${i + 1} is a pup and is ${dog} years old`)
//     }
//   }) 
// };

// checkDogs([1, 2, 3, 4, 5], [6, 7, 8, 2, 1]);

// Challenge 2

// const calcAverageHumanAge = function(ages) {
//   const humanAges = ages.map(function(age) {
//     if (age <= 2) return 2 * age
//     else return 16 + age * 4
//   })
//   console.log(humanAges)
//   const adults = humanAges.filter(function(age) {
//     return age >= 18
//   })
//   console.log(adults)
//   const average = adults.reduce(function(total, age){
//     return total + age
//   }, 0) / adults.length

//   return average
// }

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]))

// // Challenge 3

// const calcAverageHumanAge = function(ages) {
//     const humanAges = ages.map(function(age) {
//       if (age <= 2) return 2 * age
//       else return 16 + age * 4
//     })
//     .filter(function(age) {
//       return age >= 18
//     })
//     .reduce(function(total, age, i, arr){
//       return total + age / arr.length
//     }, 0)
  
//     return humanAges
//   }

//   console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]))