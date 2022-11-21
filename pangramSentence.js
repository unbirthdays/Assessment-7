/*
A pangram is a sentence that contains all the letters of the English alphabet at least once,
like “The quick brown fox jumps over the lazy dog.”
Write a function to check a sentence to see if it is a pangram or not.
*/

function isPangram(str) {
    let alphabet = "qwertyuiopasdfghjklzxcvbnm";
    let lstr = str.toLowerCase();
    for (let i = 0; i < alphabet.length; i++) {
        if (lstr.includes(alphabet[i])){
            continue;
        } else {
            return false;
        }
    }
    return true;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
// -> True

console.log(isPangram("I like cats, but not mice"));
// -> False

// runtime is O(n)