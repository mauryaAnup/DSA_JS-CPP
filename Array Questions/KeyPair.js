// Given an array Arr of N positive integers and another number X. 
// Determine whether or not there exist two elements in Arr whose sum is exactly X.

// E.g: 
// N = 6, X = 16
// Arr[] = {1, 4, 45, 6, 10, 8}
// Output: Yes
// Explanation: Arr[3] + Arr[4] = 6 + 10 = 16

// Expected Time Complexity: O(N)
// Expected Auxiliary Space: O(N)

let arr = [1, 4, 45, 6, 10, 8]
let n = arr.length
let x = 16

// Solution 1 -> Brute Force (T.C -> O(n^2))
function keyPairBruteForce(arr, n, x) {
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let sum = arr[i] + arr[j];
            if (x === sum) {
                return true;
            }
        }
    }
    return false;
}

// Solution 2 -> Sorting & Two Pointer(T.C -> O(nlogn))
function keyPairOptimized(arr, n, x) {
    arr.sort(); // T.C -> O(nlogn)
    let i = 0;
    let j = n - 1;

    while (i < j) {
        let sum = arr[i] + arr[j];
        if (sum === x) return true
        else if (sum < x) i++;
        else j--;
    }
    return false;
}