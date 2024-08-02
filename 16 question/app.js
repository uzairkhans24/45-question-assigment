"use strict";
// 16-----More Guests: You just found a bigger dinner table, so now more space is available.
// Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program 
// informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() 
// to add one new guest to the end of your list. • Print a new set of invitation messages, 
// one for each person in your list.
let Guest_List = ["Hina", "Fatima", "Asma", "Fiza"];
for (let i = 0; i < Guest_List.length; i++) {
    console.log(`Dear ${Guest_List[i]} : \n you are invited to Diner!\n`);
}
console.log(`"unfortuntely ${Guest_List[2]}, can't come to dinner."`);
Guest_List[2] =  "uzair";
console.log('\nNew list of invitation : \n');
for (let m = 0; m < Guest_List.length; m++) {
    console.log(`Dear ${Guest_List[m]}): \n yor are invited to dinner.\n`);
}
console.log("Good News! We've Found a bigger Dinner table , so more Space is available. So our new guest are :\n");
// Invite updated guests and new guests
Guest_List.unshift("Eman"); // Adding a new guest at the beginning
Guest_List.splice(Guest_List.length / 2, 1, "Kousar"); // Replacing the 3rd guest with a new one
Guest_List.push("Raima"); // Adding a new guest at the end
for (let i = 0; i < Guest_List.length; i++) {
    console.log(`Dear ${Guest_List[i]} : \nYou are invited to Dinner!\n`);
}
