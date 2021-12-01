# Advent of Code 2021

My solutions to Advent of Code 2021 in TypeScript

## Get Started

This repo runs using Deno as the runtime.

You will need to create a `.env` file that includes your `YEAR` and `COOKIE` values (the cookie value can be obtained from the browser inspector after logging in to the AOC website).

The script to create the file structure for each day uses the current day of the month by default. You can optionally pass any desired number as an argument to get a specific day of AOC.

To create the file structure for each day, simply run `sh createDay.sh` or `sh createDay.sh <DAY>` to get a specific day of the challenge.

This will create the directory for the day, get the input file necessary for the puzzle, and create code and test files.

## Run Tests

To run tests, run the following command: `deno test <TEST FILE NAME>`. Tests are written using the Deno test runner and Chai assertion library.
