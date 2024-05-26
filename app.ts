#! /usr/bin/env node
import { DifferenceInSecondsOptions, differenceInSeconds } from "date-fns";

import inquirer from "inquirer";

import chalk from "chalk";

console.log(
  chalk.bold.italic.rgb(
    321,
    45,
    322
  )("\n\t\t----------- WELCOME TO ZAIN COUNTDOWN TIMER OF CODE -----------\n")
);

const res = await inquirer.prompt([
  {
    name: "user_input",
    type: "number",
    message: chalk.bold.rgb(
      45,
      321,
      321
    )("\n\tPlease Enter The Amount Of Seconds?"),
  },
]);

let input = res.user_input;

function start_time(val: number) {
  const int_time = new Date().setSeconds(new Date().getSeconds() + val);

  const interval_time = new Date(int_time);

  setInterval(() => {
    const current_time = new Date();

    const time_diff = differenceInSeconds(interval_time, current_time);

    if (time_diff <= 0) {
      console.log(
        chalk.italic.rgb(
          204,
          153,
          255
        )("\n\t\t*******Timer Has Expired*******\n")
      );
      console.log(
        chalk.italic.bold.rgb(
          224,
          56,
          123
        )("\n\t\t-----------Thank you-----------\n")
      );

      process.exit();
    }

    const min = Math.floor((time_diff % (3600 * 24)) / 3600);

    const sec = Math.floor(time_diff % 60);

    console.log(
      chalk.bold.rgb(
        23,
        224,
        15
      )(
        `\t\t${min.toString().padStart(2, "0")}:${sec
          .toString()
          .padStart(2, "0")}\n `
      )
    );
  }, 1000);
}
if (Number.isNaN(res.user_input)) {
  console.log(chalk.red.italic.bold(`\n\tInvalid Action\n`));
} else {
  start_time(input);
}
