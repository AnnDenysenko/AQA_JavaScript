// Завдання 1: Визначення рівня успішності студента

// Task 1

import chalk from 'chalk';

import readline from 'readline';


// const readline = require('readline');

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
} else if (averageScore >= 91 && averageScore <= 100) {
    console.log(chalk.magenta("Відмінно"));
} else {
    console.log(chalk.gray("Введено некоректне значення"));
}
};

rl.question('Enter your grade: ', (averageGrade) => {
    // Print the grade to the console
    console.log(`Your grade is: ${averageGrade}`);
    // Close the readline interface
    rl.close();
  });
  


// if (averageGrade < 60) {
//     console.log(chalk.red("Незадовільно"));
// } else if (averageGrade >= 60 && averageGrade <= 70) {
//     console.log(chalk.yellow("Задовільно"));
// } else if (averageGrade >= 71 && averageGrade <= 80) {
//     console.log(chalk.green("Добре"));
// } else if (averageGrade >= 81 && averageGrade <= 90) {
//     console.log(chalk.blue("Дуже добре"));
// } else if (averageScore >= 91 && averageScore <= 100) {
//     console.log(chalk.magenta("Відмінно"));
// } else {
//     console.log(chalk.gray("Введено некоректне значення"));
// }