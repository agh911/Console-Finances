// Vaiables for storing the needed data
var months = finances.length;
var total = 0;
var net = 0;
var netChange = 0;
// Empty array to store each net change
var netChangeArray = [];
var netChangeSum = 0;
var averageChange = 0;
// Variables for greatest increase and decrease need to look like: ['string/mth-yr', number/profit||loss]
var greatestIncrease = ['', 0];
var greatestDecrease = ['', 0];
var analysis = '';


// Calculate the total using for loop
for (var main_index = 0; main_index < finances.length; main_index++) {
    total += finances[main_index][1];
    // Calculate the net total amount of profit/losses in the following manner:
        // net represented by the number data type in the finances multidimensional array
        // net change = current period's current price - previous period's closing price
            // will need an empty array to store values
    netChange = (finances[main_index][1]) - net;
    net = finances[main_index][1];
    netChangeArray.push(netChange);

    // Finding the greatest increase and decrease in the data set
    if (netChange > greatestIncrease[1]) {
        greatestIncrease = [finances[main_index][0], finances[main_index][1]];
    }

    if (netChange < greatestDecrease[1]) {
        greatestDecrease = [finances[main_index][0], finances[main_index][1]];
    }
}

// Get sum of net change array then divide by nr of months to get average change
    // format value so that it shows two decimals
for (var change_index = 0; change_index < netChangeArray.length; change_index++) {
    netChangeSum += netChangeArray[change_index];
}

averageChange = Math.round((netChangeSum / months) * 100) / 100;



analysis =
    'Financial Analysis' + '\n' +
    '----------------------------' + '\n' +
    'Total Months: ' + months + '\n' +
    'Total: $' + total + '\n' +
    'Average Change: $' + averageChange + '\n' +
    'Greatest Increase in Profits: ' + greatestIncrease[0] + ' ' + '($' + greatestIncrease[1] + ')' + '\n' +
    'Greatest Decrease in Profits: ' + greatestDecrease[0] + ' ' + '($' + greatestDecrease[1] + ')';

// Logging analysis in the console
console.log(analysis);