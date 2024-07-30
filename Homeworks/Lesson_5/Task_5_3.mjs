// Task 5

// Завдання 3: Генерація таблиці множення

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to generate multiplication table using a for loop
function generateTableFor(number) {
    console.log(`Multiplication Table for ${number} using for loop:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

// Function to generate multiplication table using a while loop
function generateTableWhile(number) {
    console.log(`Multiplication Table for ${number} using while loop:`);
    let i = 1;
    while (i <= 10) {
        console.log(`${number} x ${i} = ${number * i}`);
        i++;
    }
}

// Prompting the user for a number
rl.question('Enter a number: ', (input) => {
    const number = parseInt(input, 10);

    // Validating the input
    if (isNaN(number)) {
        console.log('Please enter a valid number.');
    } else {
        // Generating and printing the multiplication tables
        generateTableFor(number);
        generateTableWhile(number);
    }
    
    rl.close();
});
