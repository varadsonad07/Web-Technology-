// stack primitive use
// whether you can declare variables in copy
// heap non primitive use
// it gives refrense of original value

let myYoutubeName = "code with harry";
let newYoutubeName = myYoutubeName;
newYoutubeName = "code with harry 2.0";

console.log(myYoutubeName); // code with harry
console.log(newYoutubeName); // code with harry 2.0


// heap example non primitive



let user1 = {
    email : "vbsonad@gmail.com",
    fname : "varad",
    id : 131,
}
let user2 = user1;
user2.email = "shivtej@gmail.com";
console.log("-----------------------------")
console.log(user1.email);
console.log(user2.email);

// primitives data types storing stack will be assign one variable to another a copy is made so changing oen is does not affect the other 
// non primitives data types storing in heap memory when we assign one object to another variable the refrence is copy not tha value so if we change one both variables re changed