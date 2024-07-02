// Task 5

// Завдання 1: Визначення рівня успішності студента

import chalk from 'chalk';
import readline from 'readline';

// Creating an interface to read input from stdin and output to stdout
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function runTests(averageGrade) {
    if (averageGrade < 60) {
        console.log(chalk.red("Незадовільно"));
    } else if (averageGrade >= 60 && averageGrade <= 70) {
        console.log(chalk.yellow("Задовільно"));
    } else if (averageGrade >= 71 && averageGrade <= 80) {
        console.log(chalk.green("Добре"));
    } else if (averageGrade >= 81 && averageGrade <= 90) {
        console.log(chalk.blue("Дуже добре"));
    } else if (averageGrade >= 91 && averageGrade <= 100) {
        console.log(chalk.magenta("Відмінно"));
    } else {
        console.log(chalk.gray("Введено некоректне значення"));
    }
}

// Asking the user for their grade
rl.question('Enter your grade: ', (averageGrade) => {
    // Converting the input to a number
    const grade = Number(averageGrade);

    // Running the test function
    runTests(grade);

    // Closing the readline interface
    rl.close();
});
