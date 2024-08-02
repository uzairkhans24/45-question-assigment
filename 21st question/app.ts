// question21---->They think of something you could store in a TypeScript Object.
//  Write a program that creates Objects containing these items.

interface type {
    name:string , Age: number , profession:string
}

let OBJ: type = {name:"maryam" , Age: 99 , profession: "teacher"
};

console.log(`\n object containg information about me:\n`);
console.log(`My name is: ${OBJ.name}`);
console.log(`my age is : ${OBJ.Age} year old`);
console.log(`my profession is :${OBJ.profession}`);



