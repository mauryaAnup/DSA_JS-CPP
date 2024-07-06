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


#include<iostream>
#include<vector>
usnig namespace std;


// Solution 1 -> Brute Force (T.C -> O(nlogn))
void sortColor_BruteForce(vector<int> &nums) {
    sort(nums.begin(), nums.end());
}


// Solution 2 -> Two Pointer (T.C -> O(n))
void sortColor_Optimized(vector<int> &nums) {
    int s = 0;
    int i = 0;
    int e = nums.size() - 1;

    while( s < e) {
        if(nums[s] == 0) {
            swap(nums[s], nums[i]);
            i++;
            s++;
        } else if(nums[s] == 1) s++;
        else {
            swap(nums[s], nums[e]);
            e--;
        }
    }
}

int main() {
    vector<int> nums = {1, 2, 0, 1, 0, 1};

    // Solution 1
    sortColor_BruteForce(nums);

    // Solution 2
    sortColor_Optimized(nums);
}



