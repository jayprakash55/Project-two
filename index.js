var readlineSync = require('readline-sync')

var chalk = require('chalk')
  
var userName = readlineSync.question("Enter your name to begin: ");

console.clear();

console.log(chalk.blue("Welcome ")  + chalk.bold.underline(userName) + chalk.yellow(" To the Commonwealth Games 2022 Quiz!\n"));

console.log(chalk.bold.bgRed('Rules: \n') + chalk.bold(
                                                     
 '\n1) For each question, enter the option as 1,2,3 or 4.\n' +
 '\n2) You will get one point for each correct answer.\n' +
 '\n3) You need not to press Enter after the option. \n')
    );
readlineSync.question(chalk.bold('Press Enter to start the quiz:'));

console.clear();

console.log(chalk.yellow("Hi! ") + userName + chalk.green(" Let's play Commonwealth Games 2022 Quiz!\n"));

let score = 0;

function play(qno, question, option, answer, facts) {

  console.log(("Q." + qno + " of 10: \n\n") + " " + question);
  const userAnswer = readlineSync.keyInSelect(option,
    "Enter the option as: ",
    { cancel: false });

  if (option[userAnswer].toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.inverse.green("woow! you are right "));
    score = score + 1;
  }
  else {
    console.log(chalk.inverse.red("Oops! you are wrong "));
  }
  console.log(chalk.bold("your current score is: "), chalk.inverse.green(score));
  console.log("---------------------------------------------------")
}

var questions = [
  {
    question: "Where was the Commonwealth Games 2022 held? ",

    option: ["Australia", "Birmingham", "New delhi", "karachi"],

    answer: "Birmingham",

  },
  {
    question: "Which country ranks 1st in the medals tally? ",

    option: ["Australia", "India", "Pakistan", "Nigeria"],

    answer: "Australia",

  },
  {
    question: "Which place India ranks in the medals tally ",

    option: ["1st place", "3rd place", "4th place", "2nd place"],

    answer: "4th place",

  },
  {
    question: "Who got the 1st Gold medal for India in Commonwealth Games 2022 ",

    option: ["Sanket Sargar", "Mirabai Chanu", "Bindyarani Devi", "Gururaja Poojary"],

    answer: "Mirabai Chanu",

  },
  {
    question: "What is the mascot for the Commonwealth Games 2022?",

    option: ["Shera", "	Borobi", "Perry", "	Clyde"],

    answer: "Perry",

  },
  {
    question: "In which category does Mirabai chanu won the Gold for India",

    option: ["51kg", "56kg", "61kg", "59kg"],

    answer: "59kg",

  },
  {
    question: "What edition is the Commonwealth Games 2022?",

    option: ["21th", "20th", "22nd", "26th"],

    answer: "22nd",

  },
  {
    question: "Indian paralifter Sudhir kumar has won the which medal? ",

    option: ["Silver", "bronze", "Gold", "no medal"],

    answer: "Gold",

  },
  {
    question: "Who won the Gold for India in womens Boxing 50kg category",

    option: ["Mirabai chanu", "Pv sindhu", "Nilkhat Zareen", "Maricom"],

    answer: "Nilkhat Zareen",

  },
  {
    question: "Indian mens Table tennis won the which medal ? ",

    option: ["no medal", "bronze", "silver", "gold"],

    answer: "gold",

  }
]

for (var i = 0; i < questions.length; i++) {

  var currentquestion = questions[i];
  response = play(i + 1,
    currentquestion.question,
    currentquestion.option,
    currentquestion.answer);
 }
  
  console.clear();


  console.log(chalk.bold("woow! your Final score is: "), chalk.inverse.green(score));

  let high = false;

  var highScores = [
    {
      playerName: "Jay",
      score: 10
    },
    {
      playerName: "Surya",
      score: 9
    },
    {
      playerName: "Ronak",
      score: 8
    },
    {
      playerName: "Sandeep",
      score: 7
    },
    {
      playerName: "Ansu",
      score: 6
    },
  ];

  console.log("check out the highscores: ")
  console.table(highScores)

  highScores.forEach(person => {
    if (score > person.score) {
      high = true;
    }
  }
  )

  if(high){
    console.log("\nYay! you made a high score! your name will be display on the highscores table")
    console.log("Just send me the screenshot of your scores!")
  }