# Images Challenge

## Setup

First of all, you must:

- clone this repo
- run `yarn` or `npm install` from the root folder

You are all set!

**Note**: this repo contains all the needed dependencies, you **MUST NOT** install any other package (just use plain Javascript/Typescript, please!)

**Optionnally**: you can create your own repo and push this to your repo to save your progression!

## Choose a challenge to solve

All challenges are defined in the `challenges` folder

You can find instructions of each challenges by reading the comments in the `answer.sample.ts` file, and by checking the tests suit in `answer.test.ts` (**note** that the very first test DO NOT concern the challenge, it's just about importing your code)

In the challenge folder name, you will find:

- the part number: a part is completed if all challenges of it are completed
- the difficulty of the challenge (easy, medium or hard)

Challenges of a part may be solved in any order

Once all challenges of a part are solved, I'll submit you a final challenge to validate the part!

## Work a challenge

To work a challenge, you must:

- find the challenge you want to work on in the `challenges` folder, for instance `challenges/part-1_easy-1`
- copy the `answer.sample.ts` file and rename it `answer.ts`, this will code in this file
- launch the testing tool with `yarn test {PATH_TO_CHALLENGE}/answer.test.ts --watch`, for instance `yarn test challenges/part-1_easy-1/answer.test.ts --watch` (**warning** this commande must be ran from the root folder), you can substitute `yarn` for `npm` I guess

From this point, you have a terminal running tests against your code (in `answer.ts`), you may start to work! Just write your code in the `answer.ts` file, inside the default function. You **SHOULD NOT** use any import, except `Jimp` (this package is used to read and write images, the package is already a part of this project, you do not need to install it).

You can of course create custom functions in your `answer.ts` file if needed

Once your tests pass, you can try solving another challenge by stopping the testing tool and rerunning this README section

**Optionnally**: if you pushed to your own repo, do not forget to update the `.gitignore` file from the root to comment/remove the `*/**/answer.ts` line, otherwise your answers won't be pushed!

## Help

### The first test fails

Did you copy the `answer.sample.ts` file, name it `answer.ts` and place it close to the `answer.test.ts` you are running?

### I'm working on a new challenge, but only tests for the previous one are showing in the terminal

Maybe you forgot to kill your terminal, and rerun the test command with the new challenge path? (redo the "Work a challenge" part)
