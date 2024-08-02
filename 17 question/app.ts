//question 17====> Shrinking Guest List: You just found out that your new dinner table won’
// t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new
//  line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list.
//  Each time you pop a name from your list, print a message to that person letting
//  them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list.
// Print your list to make sure you actually have an empty list at the end of your program.

let Guest_List: string[] = ["Hina", "Fatima", "Asma", "Fiza"];
for (let i = 0; i < Guest_List.length; i++) {
  console.log(`Dear ${Guest_List[i]} : \n you are invited to Diner!\n`);
}

console.log(`"unfortuntely ${Guest_List[2]}, can't come to dinner."`);

Guest_List[2] =  "uzair";

console.log("\nNew list of invitation : \n");

for (let m = 0; m < Guest_List.length; m++) {
  console.log(`Dear ${Guest_List[m]}): \n yor are invited to dinner.\n`);
}
console.log(
  "Good News! We've Found a bigger Dinner table , so more Space is available. So our new guest are :\n"
);

// Invite updated guests and new guests
Guest_List.unshift("Eman"); // Adding a new guest at the beginning
Guest_List.splice(Guest_List.length / 2, 1, "Kousar"); // Replacing the 3rd guest with a new one
Guest_List.push("Raima"); // Adding a new guest at the end

for (let i = 0; i < Guest_List.length; i++) {
  console.log(`Dear ${Guest_List[i]} : \nYou are invited to Dinner!\n`);
}
console.log(
  "unfortunately,the new Dinner Table won't arrive in time, so we can only invite two people for dinner!\n"
);

while (Guest_List.length > 2) {
  let notInvited = Guest_List.pop();
  console.log(
    `Sorry, due to limited space we can not invite you to Dinner Mrs ${notInvited} \n`
  );
}
for (let i = 0; i < Guest_List.length; i++) {
  console.log(
    `Dear ${Guest_List[i]} : \n You are still invited to Dinner!  \n`
  );
}

Guest_List.pop();
Guest_List.pop();

console.log(Guest_List);
