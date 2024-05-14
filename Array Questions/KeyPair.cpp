// Given an array Arr of N positive integers and another number X. 
// Determine whether or not there exist two elements in Arr whose sum is exactly X.

// E.g: 
// N = 6, X = 16
// Arr[] = {1, 4, 45, 6, 10, 8}
// Output: Yes
// Explanation: Arr[3] + Arr[4] = 6 + 10 = 16

// Expected Time Complexity: O(N)
// Expected Auxiliary Space: O(N)

#include <iostream>
#include <algorithm>
using namespace std;

// Solution 1 -> Brute Force (T.C -> O(n^2))
bool findKeyPairBruteForce(int arr[], int n, int x) {
    for(int i = 0; i < n; i++) {
        for(int j = i+1; j < n; j++) {
            if(arr[i] + arr[j] == x) return true;
        }
    }
    return false;
}

// Solution 2 -> Sorting & Two Pointer(T.C -> O(nlogn))
bool findKeyPairOptimized(int arr[], int n, int x) {
    sort(arr, arr + n);
    int i = 0;
    int j = n - 1;

    while(i < j) {
        int sum = arr[i] + arr[j];
        if(sum == x) return true;
        else if(sum < x) i++;
        else j--;
    }
    return false;
}

int main() {
    int arr[] = {1, 4, 45, 6, 10, 8};
    int n = 6;
    int x = 16;

    // Solution 1
    findKeyPairBruteForce(arr, n, x);

    // Solution 2
    findKeyPairOptimized(arr, n, x);
}
