import inquirer from "inquirer";  
import chalk from "chalk";

console.log(chalk.bold.green("************WELCOME TO MAHNOOR TAHIR OFFICIAL CALCULATOR****************"))

const name = await inquirer.prompt([
    { message: "Enter your full name", type: "name", name: "Your_name"}
])

 const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name:"first_number"},
    { message: "Enter second number", type: "number", name:"second_number" },
    {
        message:"Select one of the operators to perform action",
        type:"list",
        name:"operators",
        choices:["Addition", "Subtraction" , "Multiplication" , "Division" , "Exponentiation" , "Modules"],
    },
]);

     // conditional statement
if (answer.operators === "Addition"){
    console.log(`Your answer is answer.first_number + answer.second_number` );
}  else if (answer.operators === "Subtraction"){
    console.log(answer.first_number - answer.second_number);
}  else if (answer.operators === "Multiplication"){
    console.log(answer.first_number * answer.second_number);
}       
else if (answer.operators === "Division"){
    console.log(answer.first_number / answer.second_number);
} 
else if (answer.operators === "Exponentiation"){
    console.log(answer.first_number ** answer.second_number);
} else if (answer.operators === "Modules"){
        console.log(answer.first_number % answer.second_number);
}else {
    console.log(chalk.red("Please Select Valid Operator"));
};     
console.log(chalk.bold.red('#################EXIT####################'));