// const sentence = "I am a good girl";
// const count = sentence.split('a').length - 1;
// console.log(count);


const student = "An engineer I am a good web developer";
let count = 0;

for (let i = 0; i < student.length; i++) {
    if (student[i] === 'A' || student[i] === 'a') {
        count++;
    }
}

console.log(count); 
