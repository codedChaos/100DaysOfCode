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
//
log = function() { return console.log.apply(console, arguments); };

var numarray = [1,1,2,2,3,4,5,6,7,7,8,8,9,10,11,11,11,12]; // test input array

/*var sliceSwap = function(nums, start, end) {
    // write function to shallow copy the array back into ascending order with NULL values
    // appended to the end of the array
    // call function from removeDupplicates() function whenever spaces are created() {
    
    //code goes here
    return numarray.slice(0, start) + numarrnumarray.slice(start, end);
},*/
//var moveArrayChunk = function(arrN, start, addons) {
    /*  write function to use copyWithin to do an in-memory copy of chunks of the array
        to fill in gaps or blank array elements.
    
        code a badass function
    
        PARAMETERS: Usage and examples
        param nums - original array of number
        param start [optional] - zero-based index to start copying elements from.
                                 if negative, start will count backwards from the 
                                 end of the array.'
                                 
                                 **If start is ommitted, copy will start from index 0.**

        param end [optional]   - zero-based index to end copying elements from. copyWithin
                                 copies up to but not including the end. If negative, end
                                 will be counted backwards from end of the array.
    
                                 **If end is ommitted, copy will end at last index of array.**
    */
    
    // my code
    // arrN.splice(start, 0, addons);
//};

var removeDuplicates = function(nums) {
  count = 0;

/*   for (var i = 0; i < nums.length; i++){
    if (nums[i + 1] === nums[i]) nums[i] = "";
  }

  for(var x = 0; x < nums.length; x++){
    if (nums[x] === ''){
      for (j = x; j < nums.length - x - 1; j++){
        temp = nums[j];
        nums[j] = nums[j+1];
        nums[j+1] = temp;
      }
    }
  }

  var y = 0;
  while(nums[y] != ""){
    count++;
    y++;
  } */

  //my way of filtering O(1) memory footprint
  arrLen = nums.length;

  for (x = 0; x < arrLen; x++) {
    log("x: " + x);

    if (! isNaN(x) && x != nums.lastIndexOf(nums[x])){
      log("inside if");

      removals = nums.lastIndexOf(nums[x]) - x;
      removeStepsCounter = removals;

      log("removals: " + removals);
      log("removeStepsCounter: " + removeStepsCounter);

      do {        
          
        nums[x + removeStepsCounter] = "";
        
        log(nums, "removeStepsCounter: " + removeStepsCounter);
          
        removeStepsCounter--;
        
        log("removeStepsCounter after do: " + removeStepsCounter);
        log("removals: " + removals);

      } while (removeStepsCounter > 0);

    }

    count++;
  }
  
  log("count: " + count + "\nnums: " + nums);
  return (count, nums);
};

log(numarray, "nums array");

response = removeDuplicates(numarray);

log(response, "response");
