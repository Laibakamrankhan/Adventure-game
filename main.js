#! /usr/bin/env node
import inquirer from "inquirer";
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Enter Your Name:"
    }
]);
let opponent = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "Choose Your Opponent",
        choices: ["Ironman", "Hulk", "Thor"]
    }
]);
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do {
    if (opponent.select === "Ironman") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What you want to do",
                choices: ["Attack", "Defend", "Run"]
            }
        ]);
        if (ask.opt === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name}fuel is ${p1.fuel}`);
                console.log(`${o1.name}fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You Lose Better Next Time");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name}fuel is ${p1.fuel}`);
                console.log(`${o1.name}fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("You Win");
                    process.exit();
                }
            }
        }
        if (ask.opt === "Defend") {
            p1.fuelIncrease();
            console.log(`Your Health Increased Your fuel is ${p1.fuel}`);
        }
        if (ask.opt === "Run") {
            console.log("You Lose Better Next Time");
            process.exit();
        }
    }
    if (opponent.select === "Hulk") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What you want to do",
                choices: ["Attack", "Defend", "Run"]
            }
        ]);
        if (ask.opt === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name}fuel is ${p1.fuel}`);
                console.log(`${o1.name}fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You Lose Better Next Time");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name}fuel is ${p1.fuel}`);
                console.log(`${o1.name}fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("You Win");
                    process.exit();
                }
            }
        }
        if (ask.opt === "Defend") {
            p1.fuelIncrease();
            console.log(`Your Health Increased Your fuel is ${p1.fuel}`);
        }
        if (ask.opt === "Run") {
            console.log("You Lose Better Next Time");
            process.exit();
        }
    }
    if (opponent.select === "Thor") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What you want to do",
                choices: ["Attack", "Defend", "Run"]
            }
        ]);
        if (ask.opt === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name}fuel is ${p1.fuel}`);
                console.log(`${o1.name}fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You Lose Better Next Time");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name}fuel is ${p1.fuel}`);
                console.log(`${o1.name}fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("You Win");
                    process.exit();
                }
            }
        }
        if (ask.opt === "Defend") {
            p1.fuelIncrease();
            console.log(`Your Health Increased Your fuel is ${p1.fuel}`);
        }
        if (ask.opt === "Run") {
            console.log("You Lose Better Next Time");
            process.exit();
        }
    }
} while (true);
