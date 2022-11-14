// Vaiables for storing the needed data
var months = finances.length;
var total = 0;
var analysis = '';

// Calculate the total using for loop
for (var main_index = 0; main_index < finances.length; main_index++){
    total += finances[main_index][1];
  }

console.log(months);
console.log(total);