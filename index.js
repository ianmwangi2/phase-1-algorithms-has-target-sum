function hasTargetSum(array, target) {
  // Create an empty set to store the complements
  const complements = new Set();

  // Iterate through each number in the array
  for (const number of array) {
    // Check if the complement exists in the set
    if (complements.has(number)) {
      return true; // We found two numbers that add up to the target
    }

    // Calculate the complement of the current number and add it to the set
    const complement = target - number;
    complements.add(complement);
  }

  // If no pairs were found, return false
  return false;
}

/* 
  Big O time complexity:
  The time complexity of this function is O(n), where n is the number of elements in the array.
  This is because we iterate through the array once, and set operations (add and has) are O(1).
*/

/* 
  Pseudocode:
  1. Create an empty set called `complements`.
  2. For each number in the array:
     a. Check if the current number exists in the `complements` set.
     b. If it does, return true.
     c. Else, calculate the complement of the current number as `target - number` and add it to the set.
  3. If no pairs were found, return false.
*/

/*
  Explanation:
  The function `hasTargetSum` checks if any two numbers in the input array add up to the target sum.
  It does this by keeping track of the complements (the difference between the target and each number)
  in a set. For each number, it checks if it exists in the set of complements, indicating that there
  is another number in the array that can be added to it to reach the target sum. If such a pair is found,
  the function returns true. If the loop completes without finding such a pair, the function returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 2, 3, 3], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 5));
}

module.exports = hasTargetSum;
