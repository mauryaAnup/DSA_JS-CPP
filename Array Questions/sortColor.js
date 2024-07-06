// Given an array nums with n objects colored red, white, or blue, 
// sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
// You must solve this problem without using the library's sort function.

// Example 1:                        ||         Example 2:
//                                   ||                                    
// Input: nums = [2,0,2,1,1,0]       ||         Input: nums = [2,0,1]
// Output: [0,0,1,1,2,2]             ||         Output: [0,1,2]


// Constraints:

// n == nums.length
// 1 <= n <= 300
// nums[i] is either 0, 1, or 2.


// Solution 1 -> Brute Force (T.C -> O(nlogn))
function sortColor_BruteForce() {
    let nums = [1, 2, 0, 1, 0, 1];
    nums.sort();
    return nums;
}


// Solution 2 -> Two Pointer (T.C -> O(n))
function sortColor_Optimized() {
    let nums = [1, 2, 0, 1, 0, 1];

    let start = 0;
    let end = nums.length - 1;
    let temp = 0;

    while (start <= end) {
        if (nums[start] == 0) {
            let swapNum = swapTwoNumber(nums[start], nums[temp]);
            nums[start] = swapNum.a
            nums[temp] = swapNum.b
            start += 1;
            temp += 1;
        } else if (nums[start] == 1) {
            start += 1
        } else {
            let swapNum = swapTwoNumber(nums[start], nums[end]);
            nums[start] = swapNum.a
            nums[end] = swapNum.b
            end -= 1;
        }
    }

    return nums;
}

//Helper Function
function swapTwoNumber(a, b) {
    a = a + b;
    b = Math.abs(a - b);
    a = Math.abs(a - b);

    return {
        a, b
    }
}


