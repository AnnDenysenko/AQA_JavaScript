// Task 5

// Завдання 2: Виконайте попереднє завдання але використовуючи конструкцію switch/case


import chalk from 'chalk';
import readline from 'readline';

// Creating an interface to read input from stdin and output to stdout
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function runTests(averageGrade) {
    switch (true) {
            case (averageGrade < 60):
                console.log(chalk.red("Незадовільно"));
                break;
            case (averageGrade >= 60 && averageGrade <= 70):
                console.log(chalk.yellow("Задовільно"));
                break;
            case (averageGrade >= 71 && averageGrade <= 80):
                console.log(chalk.green("Добре"));
                break;
            case (averageGrade >= 81 && averageGrade <= 90):
                console.log(chalk.blue("Дуже добре"));
                break;
            case (averageGrade >= 91 && averageGrade <= 100):
                console.log(chalk.magenta("Відмінно"));
                break;
            default:
                console.log(chalk.gray("Введено не коректне значення"));
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
