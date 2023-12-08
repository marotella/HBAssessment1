///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the last week at an apple orchard. 
    You will be using your coding skills to gain insights into its daily 
    operations.

    Below are three arrays each containing 7 numbers. You will use them and the 
    price variables to complete the problems in this file.

    The indexes of the arrays correspond with a day of the week.
    The first array is named fujiAcres. Notice that the first item in this array 
    is 2, meaning that 2 acres of Fuji apples were picked on Monday of this week.
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]





// PROBLEM 1

/*
    Using a for loop, calculate the total number of acres picked for the entire 
    week.

    Save the number to a variable called `totalAcres`.
    Log `totalAcres` to the console.
*/

// CODE HERE

let totalAcres = 0 // initialize a variable for total acres that is mutable
for (let i = 0; i < 7; i ++){ // the for loop needs to iterate over the course of the week. Start the i at 0 for index 0, run the loop until it reaches 7 and increment by 1 each loop
    totalAcres = totalAcres + fujiAcres[i] + galaAcres[i]+ pinkAcres[i] // during each loop update the variable totalAcres by adding the value at the given index in the acres array
}
console.log(totalAcres); // console log to confirm loop is functioning correctly


// PROBLEM 2

/*
    Using `totalAcres`, calculate the average number of acres picked per day. 

    (Remember that the average is the total divided by the number of days)

    Save the answer to a variable called 
    `averageDailyAcres`, and log `averageDailyAcres` to the console.
*/

// CODE HERE

let averageDailyAcres = totalAcres/fujiAcres.length // should I hard code this at 7 given the context of the problem? Or use length to allow it to be responsive to any changes in the individual acres arrays?

console.log(averageDailyAcres)


// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number of acres that still have apples left. 
    
    The `days` variable represents how many more days of work are left. It's 
    initialized at 0 because we're going to be using it as a counter.
    
    Write a while loop that will continue to run while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to calculate this number. You might
    think about other ways you could do it more mathematically.
*/

let acresLeft = 174 
let days = 0

// CODE HERE

while (acresLeft >= 0 ){
    acresLeft = acresLeft - averageDailyAcres
    days += 1
} // based on the directions given in the problem it is requesting a while loop.  Decrement the acres lef by the average, and increment the days to track the number of days

console.log(days);
// PROBLEM 4

/*
    Your next task is to create 3 arrays that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store your new arrays. Make sure that you
    don't modify the original arrays on lines 36 - 38.

    Log each of your arrays to the console.

    (Hint: loop over the original arrays, calculate the tons for that day, then
    add that number into the new list)
*/

// CODE HERE

let fujiTons = [];
let galaTons = [];
let pinkTons = [];

for (let d = 0; d < 7; d++){ //similar for loop to iterate by 1 each loop over the course of a week
    fujiTons.push(fujiAcres[d]*6.5); // for each loop, add the value at the index of the apple acre array multiplied by 6.5 for tons of apples
    galaTons.push(galaAcres[d]*6.5);
    pinkTons.push(pinkAcres[d]*6.5)
}
console.log(fujiTons);
console.log(galaTons);
console.log(pinkTons);

// PROBLEM 5

/*
    Next, calculate the TOTAL number of pounds picked per variety.

    You'll need to add up the tons per each variety and convert the number 
    into pounds -- store that number in the variables given below. 
    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

let fujiPounds = 0
let galaPounds = 0
let pinkPounds = 0


// CODE HERE 

for ( j = 0; j < 7; j++){
    fujiPounds = fujiPounds + (fujiTons[j] * 2000); // for each loop, increase the pounds variable by the value of the index of the tons array multipled by 2000 to convert to tons
    galaPounds = galaPounds + (galaTons[j] * 2000);
    pinkPounds = pinkPounds + (pinkTons[j] * 2000);
}

console.log(fujiPounds)
console.log(galaPounds)
console.log(pinkPounds)

// PROBLEM 6

/*
    Now that you know the total pounds per variety, use the prices below to 
    figure out how much you'll make from selling each type of apple. 

    The prices are per pound and are written in cents. 

    Log each of the profits to the console. 
*/
const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55

// CODE HERE

let fujiProfit = fujiPrice * fujiPounds;
let galaProfit = galaPrice * galaPounds;
let pinkProfit = pinkPrice *  pinkPounds;


console.log(fujiProfit);
console.log(galaProfit);
console.log(pinkProfit);




// PROBLEM 7

/*
    Add up all your profits and save  the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE

let totalProfit = galaProfit + fujiProfit + pinkProfit;
console.log(totalProfit);