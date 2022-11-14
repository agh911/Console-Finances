// Vaiables for storing the needed data
var months = finances.length;
var total = 0;
var analysis = '';


// Calculate the total using for loop
for (var main_index = 0; main_index < finances.length; main_index++) {
    total += finances[main_index][1];
}

// Calculate the net total amount of profit/losses in the following manner:
    // net represented by the number data type in the array -> create var net w/ initial value of 0
    // net change = current period's current price - previous period's closing price
        // will need an empty array to store values
    // get sum of net change array then divide by nr of months to get average change
        // format value so that it shows two decimals

        
// analysis = 
// 'Financial Analysis' + '\n' +
// '----------------------------' + '\n' +
// 'Total Months: ' + months + '\n' +
// 'Total: $ ' + total + '\n' +
// 'Average  Change: $ ' + averageChange + '\n' +
// 'Greatest Increase in Profits: ' + greatestIncrease + '\n' +
// 'Greatest Decrease in Profits: ' + greatestDecrease;

// // Logging analysis in the console
// console.log(analysis);