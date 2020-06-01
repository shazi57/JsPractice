/*Given a list of non-negative integers and a target sum, find a pair of numbers that sums to the target sum.

Example:

var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5] */

function findPairForSum(array, n) {
    for (i = 0; i < array.length; i++) {
        if (array[i] > n) {
            continue;
        }
        var theOtherNum = n - array[i];

        for (k = i + 1; k < array.length; k++) {
            if (array[k] === theOtherNum) {
                return [array[i], theOtherNum];
            }
            else {
                continue;
            }
        }
    }
}

var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]