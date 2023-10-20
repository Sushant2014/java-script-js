const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => {
//      return num > 4
// })

// console.log(newNums);

// const newNums = []
// myNums.forEach( (num) => {
//     if(num>4) {
//         newNums.push(num)
//     }
// })
// console.log(newNums);

const books = [
    {title : 'Book One', genere : 'Fiction',publish : '1981', edition : 2004},
    {title : 'Book Two', genere : 'Non-Fiction',publish : '1987', edition : 2009},
    {title : 'Book Three', genere : 'History',publish : '1985', edition : 2005},
    {title : 'Book Four', genere : 'Fiction',publish : '1989', edition : 2001},
    {title : 'Book Five', genere : 'Non-Fiction',publish : '1984', edition : 2000},
    {title : 'Book Six', genere : 'History',publish : '1980', edition : 2010},
    {title : 'Book Seven', genere : 'Science',publish : '1997', edition : 2012},
    {title : 'Book Eight', genere : 'Fiction',publish : '1978', edition : 2016},

];
// // const userBooks = books.filter( (bk) => bk.genere==='History')
// const publishYear = books.filter ( (pbyear) => {
//     return pbyear.edition < 2006 && pbyear.genere === "Non-Fiction"

// })

// // console.log(userBooks);
// console.log(publishYear);

const myNumbers = [1,2,3,4,5,6,7,8,9,10] 
// const newMynums = []

// myNumbers.forEach( (item) =>  { 
//     item += 10 
//     newMynums.push(item)
// })
// const newNums = myNumbers.map( (num) => num+10)
// console.log(newMynums);

// const myTotal = myNumbers.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc+currval
// }, 0)
// console.log(myTotal);
const myTotal = myNumbers.reduce( (acc,curr) => acc+curr,0)
// console.log(myTotal);

const shoppingCart = [

    {
    itemName : "JS Course",
    price : 999
    },

    {
        itemName : "Python Course",
        price : 2999
    },
    {
        itemName : "Web Development Course",
        price : 1999
    },
    {
        itemName : "IOS Development Course",
        price : 4999
    },

]

const priceToPay = shoppingCart.reduce( (acc,item) => acc + item.price,0)
console.log(`your total amount is ${priceToPay}`);