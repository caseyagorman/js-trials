/////////////////////////////////////////////////////////
// PART 1

/////////////////////////////////////////////////////////
// Show Profile Info

// Add function to prnt profile info
function showProfile (name, catchphrase, location){
    console.log(`PROFILE\n Name: ${name}\n Catchphrase: ${catchphrase}\n Location: ${location}`)
}



/////////////////////////////////////////////////////////
// Display Likes
const interests = [
  'being annoying',
  'seeds',
  'staring at human food'
];

function showInterests (interests){
    console.log('THINGS I LIKE:')
    for (let i = 0; i < interests.length; i += 1) {
        console.log(` ${interests[i]}`);
    }
}


/////////////////////////////////////////////////////////
// Display Favorites
const favorites = {
    food: 'pebbles',
    tree: 'palm',
    quote: 'Bock bock bock'
  // Add more favorites
};

// Add function to print favorites
function showFavorites(favorites){
    console.log('FAVORITES')
    for (let k in favorites) {
        console.log(` ${k}: ${favorites[k]}`);
    }
}


/////////////////////////////////////////////////////////
// PART 2

/////////////////////////////////////////////////////////
// Add Transactions

// Add function to add transaction
let transactions = {}

function addTransaction(date, amount, transactions){
    transactions[date]= amount;
    console.log(`${date}: ${amount}`);
}

// addTransaction('may2',  100, transactions)
// addTransaction('may3', -55, transactions)
// addTransaction('may4', -5, transactions)

// Create object to hold transactions

// Add transactions to object


/////////////////////////////////////////////////////////
// Get Balance Status

// Add function to calculate balance status

function getBalanceStatus(balance){
    if(balance < 0){
        return'YOU ARE OVERDRAWN'
    }
    else if(balance < 20){
        return 'Warning! Your balance is almost 0!'
    }
    else{
        return'Normal'
    }
}


/////////////////////////////////////////////////////////
// Calculate Current Balance

// Add function to calculate and return current balance

function getCurrentBalance(balance, transactions){
    for (let transaction in transactions) {
        if (balance < 0 ) {
            balance -= 25
        }
        else {
            balance += transactions[transaction]
        }
    }

    return balance
}


/////////////////////////////////////////////////////////
// Show Account Activity

// Add function to print account activity
function showAcctActivity(currentBalance, transactionHistory){
    console.log('TRANSACTIONS:')
    for (let k in transactionHistory){
        console.log(`${k}: ${transactionHistory[k]}`)
    }
    for (let t in transactionHistory) {
        if (currentBalance < 0 ) {
            currentBalance -= 25
        }
        else {
            currentBalance += transactionHistory[t]
        }

    }

    console.log(`CURRENT BALANCE: ${currentBalance}`)
    console.log(`CURRENT STATUS: ${(getBalanceStatus(currentBalance))}`)

}

showAcctActivity(100, transactions)


/////////////////////////////////////////////////////////
// Creating a User Object

// Add user object
let melonObject = {
    Name: 'Melange',
    Catchphrase: 'Jeez louise',
    Location: 'Oakland',
    Interests:['teaching','programming','saxophone'],
    Favorites: {
    food: 'pebbles',
    tree: 'palm',
    quote: 'Bock bock bock'
},
    Transactions: transactions,
    startingBalance: 100
}



// Add function to print user dashboard

function showDashboard(userObject){
    showProfile(userObject['Name'], userObject['Catchphrase'], userObject['Location'])
    showInterests(userObject['Interests'])
    showFavorites(userObject['Favorites'])
    showAcctActivity(userObject['startingBalance'],userObject['Transactions'])
}
console.log(showDashboard(melonObject))

/////////////////////////////////////////////////////////
// PART 3

// Add object that keeps track of premium members

// Add function to return emails of premium members

let premiumMembers = {Nelom: {Email: 'nel@om.me',
                              Tier: 'gold'},
                      Shell: {Email: 'sh@ell.by',
                              Tier: 'gold'},
                      Nardog:{Email: 'nardog@sing.er',
                              Tier: 'silver'}
                    }
function getPremiumEmails(premiumMembers){
    for (let member in premiumMembers){
        console.log(premiumMembers[member]['Email'])
    }
}

getPremiumEmails(premiumMembers)
/////////////////////////////////////////////////////////
// PART 4
let week =  {Mon: '', Tue: '', Wed:'', Thu:'', Fri:'', Sat:'', Sun:''}

let interns = ['Darrel', 'Melissa', 'Doug', 'Andy', 'Ming', 'Casey', 'Vilma', 'Andrew']

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function assignIntern(week) {
    for (let day in week){
        week[day] = interns[getRandomInt(interns.length)]
    }
    return week
}

console.log()
console.log(assignIntern(week))
// Add function to assign interns to workdays

// Add a function to generate customer support hours

