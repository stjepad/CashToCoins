// Now do the reverse. Convert the dollar amount into the coins that make up that dollar amount.
//  The final result is an object with the correct number of quarters, dimes, nickels, and pennies.


// make a dollar amount divisible by all coins to be included
const dollarAmount = 28.92

//  make a piggy bank for us to store all of the various coins
const piggyBank = {
    "quarters": 0,
    "nickels": 0,
    "dimes": 0,
    "pennies": 0
}

    // create a function
const ConvertedDollarAmount = (coins) => {
    // convert the number to not havve decimal points. This makes it easier for javaScript to do math.
    let remainder = Math.round(dollarAmount * 100)

    // QUARTERS
    // find how many times dollarAmount is divisible by a quarter
    let numQuarters = Math.floor (remainder/25)
    // send to piggybBank
    piggyBank.quarters = numQuarters
    // get remainder of coins
    remainder -= numQuarters * 25

    // DIMES
    let numDimes = Math.floor (remainder/10)
    piggyBank.dimes = numDimes
    remainder -= numDimes * 10

    // NICKELS
    let numNickel = Math.floor (remainder/5)
    piggyBank.nickels = numNickel
    remainder-=numNickel * 5

    // PENNIES
    let numPennies = Math.floor (remainder/1)
    piggyBank.pennies = numPennies
    remainder-= numPennies *1

    // console.log to get the answer
    console.log(piggyBank)
}
// call the function or it doesn't ever start the process
ConvertedDollarAmount()
