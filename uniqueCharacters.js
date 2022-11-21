/* Write a function that takes in a single word, as a string.
It should return True if that word contains only unique characters.
Return False otherwise.
*/


const hasUniqueChars = name => {
    for (let i = 0; i < name.length; i++) {
        for (let j = i + 1; j < name.length; j++) {
            if (name[i] === name[j]) {
                return false;
            }
        }
    }

    return true;
};

console.log(hasUniqueChars("Monday")); // true

console.log(hasUniqueChars("Moonday")); // false

// runtime is O(n^2)
