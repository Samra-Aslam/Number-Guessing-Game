import inquirer from "inquirer";


const randomnumber = Math.floor(Math.random()*10);
const answers = await inquirer.prompt([
    {
        name : " userguessedNumber",
        type : " number",
        message : " pleas enter your guessed number between 1 to 10"
    },
]);
if (answers.userguessedNumber===randomnumber){
    console.log(" Congratualation! you guessed right number");
} else {
    console.log("you guessed wrong number")
}