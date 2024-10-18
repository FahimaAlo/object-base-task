const myHobby = "I am an web developer and i will learn the student";

const capitalizedString = myHobby
  .split(' ')                           
  .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
  .join(' ');                           

console.log(capitalizedString);
