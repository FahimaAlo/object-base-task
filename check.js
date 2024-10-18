const vowel = "I am very hardworking person but i am not lazy";
const vowels = ['a', 'e', 'i', 'o', 'u'];

function containsAllVowels(str) {
    const lowerCaseStr = str.toLowerCase();  
    return vowels.every(vowel => lowerCaseStr.includes(vowel));  
}

console.log(containsAllVowels(vowel));
