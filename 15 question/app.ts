//queston 15-----> Changing Guest List: You just heard that one of your guests can’t make the dinner, 
// so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of 
// your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it 
// with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.


let Guest_List : string[] = ["Hina", "Fatima", "Asma", "Fiza"];
for(let i =0; i < Guest_List.length; i++ ) {
    console.log (`Dear ${Guest_List[i]} : \n you are invited to Diner!\n`);
}

console.log (`"unfortuntely ${Guest_List[2]}, can't come to dinner."`);

Guest_List[2] = "uzair";

console.log('\nNew list of invitation : \n');

for ( let m = 0; m <  Guest_List.length; m++ ){
    console.log(`Dear ${Guest_List[m]}): \n yor are invited to dinner.\n`);
}
