//import chalk from "chalk";
const chalk = require('chalk'); 
const validator = require('validator');

console.log(chalk.blue("hello wrold"));

const res = validator.isEmail("shubh@gmail.com");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));
