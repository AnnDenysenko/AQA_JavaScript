// Task 2

// const chalk = require("chalk");
// const prompt = require("prompt-sync")();

// let averageGrade = +prompt("Enter your grade: ");

const averageGrade = 80;

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


