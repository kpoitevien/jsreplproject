let  readlineSync  =  require('readline-sync');
let inputError = ("response is invalid")

console.log("The Dark Street")
console.log("Make a choice \n")

console.log('You walk down a dark street, you see a spooky mansion, a scary forest, and a swamp\n')
choices = ["You walk up to the mansion", "Run into the forest", "Swim in the swamp."]
choice = readlineSync.keyInSelect(choices)
console.log(">>");
switch (choice) {
  case 0:
    console.log("You walk up to the mansion");
    break;
  case 1:
    console.log("Game Over. You fall into a pit and the game restarts")
    process.exit()
    break;
  case 2:
    console.log("Game Over. You are eaten by snakes and the game restarts.");
    process.exit()
    break;
  default:
    console.log("Game Over");
    process.exit()
}

console.log("You arrive at the mansion's door, what do you do?")
choices2 = ["Knock on the door", "Kick open the door, Go back home"]
choice2 = readlineSync.keyInSelect(choices2)
switch (choice2) {
  case 0:
    console.log("Knock knock");
    break;
  case 1:
    console.log("Game over. A dog attacks you.")
    process.exit()
    break;
  case 2:
    console.log("Game Over, You go back home")
    process.exit()
}

console.log("There is an eerie pause after the knock on the door")
choices3 = [" Wait for the door to open", "Run away", "Enter through the window"]
choice3 = readlineSync.keyInSelect(choices3)
switch (choice3) {
  case 0:
    console.log("You meet a beautiful princess and live happily ever after. Game Over. You Win!");
    process.exit()
    break;
  case 1:
    console.log("Game Over.");
    process.exit()
    break;
  case 2:
    console.log("Police Arrest you. Game Over.");
    process.exit()
    break;

}
