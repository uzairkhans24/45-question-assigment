// question15 ===>Guest List: If you could invite anyone, living or deceased, to dinner,
//  who would you invite? Make a list that includes at least three people you’d like to invite to dinner.
//   Then use your list to print a message to each person, inviting them to dinner.


// let Guest_List : string[] = ["Hina", "Fatima", "Asma", "Fiza"];
// for(let i =0; i < Guest_List.length; i++ ) {
//     console.log (`Dear ${Guest_List[i]} : \n you are invited to Diner!\n`);
// }


let Guest_List: string[] = ["Hina", "Fatima", "Asma", "Fiza"];
let i = 0;
while (i < Guest_List.length) {
    console.log(`Dear ${Guest_List[i]} : \nYou are invited to Dinner!\n`);
    i++;
}
