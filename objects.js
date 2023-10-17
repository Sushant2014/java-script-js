// const myArr = [34,435,6,3,22,33,65]
// console.log(myArr.slice(3,6))
// console.log(myArr.splice(1,3));
// console.log(myArr)



const tinderUser = new Object()
tinderUser.id = "23332"
tinderUser.name = "Sushant"
tinderUser.isloggedIn = false
// console.log(tinderUser);

const regularUser = {
    email: "some@gmil.com",
    fullname: {
        userfullname: {

        firstname: "Sushant",
        lastname: "Patial"
    }
}
}
// console.log(regularUser.fullname.userfullname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "c"}
// const obj3 = Object.assign({}, obj1,obj2)
const obj3 = {...obj1,...obj2}
// console.log(obj3);

const user = [
    {
        od: 1,
        email: "sp@amazon.in"
    },
    {
        od: 1,
        email: "sp@amazon.in"
    },
    {
        od: 1,
        email: "sp@amazon.in"
    },
]
user[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
