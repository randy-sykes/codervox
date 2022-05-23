var choice = prompt("You have two choices, coffee or tea. Which would you like?").toLowerCase();

if(choice === "coffee") {
    document.write("Great choice. Would you like cream and sugar?");
} else if(choice === "tea") {
    document.write("Excellent choice. Would you like milk and sugar?");
} else {
    document.write("Sorry, I don't know what that is.")
}