#! /usr/bin/env node
import inquirer from "inquirer";

console.log("======>>Welcome to the Adventure Game<<======'\n" , "Regards", "\n[AMRAHA]\n");


class Player{
    name: string;
    life: number = 100;
    constructor(name:string){
        this.name = name
    }
    lifeDecrease(){
        let life = this.life - 25
        this.life = life
    }
    lifeBoost(){
        this.life = 100
    }
}

class Opponent{
    name: string;
    life: number = 100
    constructor(name:string){
        this.name = name
    }
    lifeDecrease (){
        let life = this.life - 25
        this.life = life
    }
}

let player = await inquirer.prompt(
    [
        {
            name: "name",
            type: "input",
            message: "Please Enter Your Name -->"
        }
    ]
)

let opponent = await inquirer.prompt(
    [
        {
            name: "select",
            type: "list",
            message: "Select the Opponent you want to fight with..",
            choices: ["Witch", "Zombie", "Dragon"]
        }
    ]
)
let player1 = new Player (player.name)
let opponent1 = new Opponent (opponent.select)

console.log(`=======>> ${opponent1.name} v/s ${player1.name} <<=======`);


do {

//For Opponent witch
    if (opponent.select == "Witch"){
        let ask = await inquirer.prompt(
            [
                {
                    name:"options",
                    type: "list",
                    message:"What would you like to do?",
                    choices: ["Attack", "Boost", "Run"]
                }
            ]
        );
        if (ask.options == "Attack"){
            let randomNumber = Math.floor(Math.random() * 2)
            if (randomNumber > 0){
                player1.lifeDecrease()
                    console.log(`~~~~~~ ${player1.name}'s life is ${player1.life} ~~~~~~`);
                    console.log(`~~~~~~ ${opponent1.name}'s life is ${opponent1.life} ~~~~~~`);
                    if (player1.life <= 0){
                        console.log(`Oops, You lost the game ): `);
                        process.exit()
                    }
                }
                if (randomNumber <= 0){
                    opponent1.lifeDecrease()
                    console.log(`~~~~~~ ${player1.name}'s life is ${player1.life} ~~~~~~`);
                    console.log(`~~~~~~ ${opponent1.name}'s life is ${opponent1.life} ~~~~~~`);
                    if (opponent1.life <= 0){
                        console.log(`Yayy , You win :)`);
                        process.exit()
                    }
                }
            }
        if (ask.options == "Boost"){
            player1.lifeBoost()
            console.log(`=======>> Your life has been boosted! Now you have ${player1.life} life<<=======`);
        }
        if (ask.options == "Run"){
            console.log(`=======>> You lost! Better luck next time <<=======`);
            process.exit()
        }

}

//For Opponent Zombie
if (opponent.select == "Zombie"){
    let ask = await inquirer.prompt(
        [
            {
                name:"options",
                type: "list",
                message:"What would you like to do?",
                choices: ["Attack", "Boost", "Run"]
            }
        ]
    );
    if (ask.options == "Attack"){
        let randomNumber = Math.floor(Math.random() * 2)
        if (randomNumber > 0){
            player1.lifeDecrease()
                console.log(`=======>> ${player1.name}'s life is ${player1.life} <<=======`);
                console.log(`=======>> ${opponent1.name}'s life is ${opponent1.life} <<=======`);
                if (player1.life <= 0){
                    console.log(`Oops, You lost the game ): `);
                    process.exit()
                }
            }
            if (randomNumber <= 0){
                opponent1.lifeDecrease()
                console.log(`=======>> ${player1.name}'s life is ${player1.life} <<=======`);
                console.log(`=======>> ${opponent1.name}'s life is ${opponent1.life} <<=======`);
                if (opponent1.life <= 0){
                    console.log(`Yayy , You win :)`);
                    process.exit()
                }
            }
        }
    if (ask.options == "Boost"){
        player1.lifeBoost()
        console.log(`=======>> Your life has been boosted! Now you have ${player1.life} life<<=======`);
    }
    if (ask.options == "Run"){
        console.log(`=======>> You lost! Better luck next time <<=======`);
        process.exit()
    }

}

//For Opponent Dragon 
if (opponent.select == "Dragon"){
    let ask = await inquirer.prompt(
        [
            {
                name:"options",
                type: "list",
                message:"What would you like to do?",
                choices: ["Attack", "Boost", "Run"]
            }
        ]
    );
    if (ask.options == "Attack"){
        let randomNumber = Math.floor(Math.random() * 2)
        if (randomNumber > 0){
            player1.lifeDecrease()
                console.log(`=======>> ${player1.name}'s life is ${player1.life} <<=======`);
                console.log(`=======>> ${opponent1.name}'s life is ${opponent1.life} <<=======`);
                if (player1.life <= 0){
                    console.log(`Oops, You lost the game ): `);
                    process.exit()
                }
            }
            if (randomNumber <= 0){
                opponent1.lifeDecrease()
                console.log(`=======>> ${player1.name}'s life is ${player1.life} <<=======`);
                console.log(`=======>> ${opponent1.name}'s life is ${opponent1.life} <<=======`);
                if (opponent1.life <= 0){
                    console.log(`Yayy , You win :)`);
                    process.exit()
                }
            }
        }
    if (ask.options == "Boost"){
        player1.lifeBoost()
        console.log(`=======>> Your life has been boosted! Now you have ${player1.life} life<<=======`);
    }
    if (ask.options == "Run"){
        console.log(`=======>> You lost! Better luck next time <<=======`);
        process.exit()
    }

}}

while(true);
