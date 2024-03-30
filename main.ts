#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.greenBright.bgCyanBright("\n Welcom to the ATM Machine!\n"));
console.log(chalk.yellow("Insert you card"));

let languageAns = await inquirer.prompt([
  {
    name: "language",
    message: "Please Select A Language",
    type: "list",
    choices: ["English", "Urdu"],
  },
]);
if (languageAns.language === "English") {
  console.log(chalk.gray('You have selected "English"'));
} else if (languageAns.language === "Urdu") {
  console.log(chalk.gray('You have selected "Urdu"'));
}

let myBalance = 20000;

let myPin = 1234;

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter your pin",
    type: "number",
  },
]);

if (pinAnswer.pin === myPin) {
  console.log(chalk.green("pin code is Correct !!!"));
} else if (pinAnswer.pin !== myPin) {
  console.log(chalk.red("Incorrect pin number"));
}

let Accounttype = await inquirer.prompt([
  {
    name: "accounttype",
    message: "Select your Account type",
    type: "list",
    choices: ["Current", "Saving"],
  },
]);
if (Accounttype.accounttype === "Current") {
  console.log(chalk.yellowBright('you have selected "Curent"'));
} else if (Accounttype.accounttype === "Saving") {
  console.log(chalk.green('you have selected "Saving"'));
}

let operationAns = await inquirer.prompt([
  {
    name: "operation",
    message: "Please Select Transaction",
    type: "list",
    choices: ["Language", "Fast cash", "Withdraw", "Check balance", "Exit"],
  },
]);

if (operationAns.operation === "Fast cash") {
  let fastcashAns = await inquirer.prompt([
    {
      name: "fastcash",
      message: "select Amount",
      type: "list",
      choices: [1000, 2000, 3000, 4000, 5000],
    },
  ]);
  if (fastcashAns.fastcash > myBalance) {
    console.log(chalk.redBright("Insufficient Balance"));
  } else {
    myBalance -= fastcashAns.fastcash;
    console.log(chalk.yellow(`${fastcashAns.fastcash} withdraw sucessfully`));
    console.log(chalk.blue(`Your Remaining Balance is: ${myBalance}`));
  }
}

if (operationAns.operation === "Withdraw") {
  let amountAns = await inquirer.prompt([
    {
      name: "amount",
      message: "Enter your amount",
      type: "number",
    },
  ]);

  myBalance -= amountAns.amount;

  console.log(chalk.bgGreenBright("your remaining balance is:" + myBalance));
} else if (operationAns.operation === "Check balance") {
  console.log("your balance is:" + myBalance);
} else if (operationAns === "Exit") {
  console.log(chalk.bgYellowBright("Thank you for using the ATM,Goodbye!"));
}
