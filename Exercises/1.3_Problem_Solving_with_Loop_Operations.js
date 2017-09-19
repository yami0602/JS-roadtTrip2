// Video 1.1 accompanies this exercise

// Off the coast of Miami Beach, a group of oceanologists have
// begun a project that will grow the population of goldfish. Every
// month, the population will multiply by four! To stay on top of this
// explosive growth, the scientists would like a printout of how many
// goldfish will make a new home in Miami Beach water.
//
// Copy the variables below and use them to build a while loop that prints
// a message for one year’s worth of time.

let numGoldfish = 4;
let monthNumber = 1;
const monthsToPrint = 12;

// Here’s what the first two lines of output should look like:
//
//    There will be 16 goldfish after 1 month(s)!
//    There will be 64 goldfish after 2 month(s)!

while(monthNumber <= monthsToPrint )  { 
    numGoldfish = numGoldfish * 4
    console.log(`There will be  ${numGoldfish } goldfish after ${monthNumber} month(s)!` )
    monthNumber = monthNumber + 1
}

