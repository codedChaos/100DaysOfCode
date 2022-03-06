# 100DaysOfCode

## Challenge-Log

[#100DaysOfCode Official Website Link][1]

<style type="text/css">
    h5  {
        font-family:    Ubuntu, "Helvetica Neue", Helvetica, sans-serif;
        font-size:      18px;
        font-weight:    normal;
    }  
    h2 {
        font-family:    Georgia, Verdana, monospace;
        font-size:      24px;
        font-weight:    medium;
        font-style:     bold;
        color:          orange;
        text-align:     left;
        padding:        0px 0px 0px 10px;
    }
    h1 {
        font-size:      48px;
        text-align:     center;
        border:         5px solid;
        color:          chartreuse;
        padding:        10px 10px 10px 10px;
        border-radius:  25%;
    }
    href {
        color:          red;
    }
</style>

----------------------------------------------------------------

### Table of Contents

- [100DaysOfCode](#100daysofcode)
  - [Challenge-Log](#challenge-log)
    - [Table of Contents](#table-of-contents)
    - [Daily Entries](#daily-entries)
      - [Day1](#day1)
        - [Example](#example)
        - [My Solution](#my-solution)
    - [Links & References](#links--references)

&nbsp;

### Daily Entries

#### [Day1][3]

 Working on helping other user solve coding challenge question with JavaScript. Question Specifics: remove duplicate entries from an array of integers, leaving behind empty elements that have been sorted to the end of the array.

##### [Example][3]

```javascript
int[] nums = [1, 1, 2, 2, 2, 3, 3, 3];
// write function that returns the number of unique integers in the array along with
// a sorted array that has moved all empty elements to the end of the array.
var result = function(nums) {
    // remove duplicate entries and resort the blanks to the end of the array
    return (countOfUniqueIntegers, nums);
}

console.log(result(nums)); 

// expected output below

[3, [1, 2, 3, '', '', '', '', '']]
// array is changed in-place to keep memory usage constant O(1). This array length
// is the same as original array length. You don't have to empty the array elements
// but it would need to look like this or similar.

[3, [1, 2, 3, 1, 2, 2, 3, 3]]; 
// as long as the first consecutive elements are in unique and ascending order.

```

##### [My Solution][3]

```javascript
    // paste code from working solution
```

&nbsp;

### Links & References

[1]: https://100daysofcode.com/
[2]: https://github.com/codedChaos/100DaysOfCode/wiki/Day1
[3]: https://github.com/codedChaos/100DaysOfCode