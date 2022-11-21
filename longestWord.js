// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

function findLongestWord(arr) {
    // for (i = 0; i < arr.length; i++) {
        
    // }
    let long = arr.reduce(function(longest, currentWord) {
        if(currentWord.length > longest.length)
           return currentWord;
        else
           return longest;
      });

      return long.length;
}

console.log(findLongestWord(["hi", "hello"])); // 5

// runtime is O(n)
