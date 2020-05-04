/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    let max = 0;
    let second = 0;
    let i;

    for (i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
        }
    }
    for (i = 0; i < nums.length; i++) {
        if (nums[i] > second && nums[i] < max) {
            second = nums[i];
        }
    }
    return second;
}