for (let i= 0; i <= 90; i++) {
    // console.log(`outer loop value ${i}`);
    for(let j =0;j<=10;j++) {
        // console.log(`inner loop value ${j} and inner loop ${i}`);
        // console.log(i + '*' +j + '=' +i*j);
    }
    
}

let myArr = ["flash","batman","superman"]

for(let index = 0;index<myArr.length;index++) {
    // console.log(myArr[index]);
    // const element = myArr[index]
    // console.log(element);  
}

const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
}

const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}
for(const key in myObject) {
    // console.log(key);
    // console.log(myObject[key]);
    console.log(`${key} shortcut is for ${myObject[key]}`);
}




