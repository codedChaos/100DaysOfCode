/* Given an integer array nums sorted in non-decreasing order, 
reemove the duplicates in-place such that each unique
element appears only once. The relative order of the elements 
should be kept the same.

Since it is impossible to change the length of the array in some
languages, you must instead have the result be placed in 
the first part of the array nums. More formally, if there are k
elements after removing the duplicates, then the first k
elements of nums should hold the final result. It does not matter
what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of
nums.

Do not allocate extra space for another array. You must do this by
modifying the input array in-place with O(1) extra memory.

Custom Judge:

The judge will test your solution with the following code: */

/* int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}

If all assertions pass, then your solution will be accepted.

 

Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,]
Explanation: Your function should return k = 2, with the first two elements of nums being 
1 and 2 respectively. It does not matter what you leave beyond the returned k (hence they 
are underscores). */
//

// laziness function to ease logging
log = function() { return console.log.apply(console, arguments); };

// global variable container
var ArrayStrip = {};

// global attributes
ArrayStrip.nums = [1,1,2,2,3,4,5,6,7,7,8,8,9,10,11,11,11,12];
ArrayStrip.length = ArrayStrip.nums.length;
ArrayStrip.removal = -1;  // start at -1 instead of zero to offset for array being zero indexed

// function to remove duplicate elements of array
var removeDuplicates = function(nums) {
  //my way of filtering O(1) memory footprint
  for (x = 0; x < nums.length; x++) {
    if (x != nums.lastIndexOf(nums[x])){
      // declare variables to track removing duplicates
      removal = nums.lastIndexOf(nums[x]) - x;
      removeStepsCounter = removal;
      
      do {          
        nums[x + removeStepsCounter] = "";  
        removeStepsCounter--;
        ArrayStrip.removal++;
      } while (removeStepsCounter > 0);
    }
  }
  // sort array nums to start and '' to end
  nums.sort(function(a, b) {
    if (a === '') {
      a = Infinity;
      // log("a = Infinity");
    } else if (b === '') {
      b = Infinity;
      // log("b = Infinity");
    }
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });
  return ArrayStrip.nums;
};

removeDuplicates(ArrayStrip.nums);

log(ArrayStrip.length - ArrayStrip.removal, ArrayStrip.nums);
