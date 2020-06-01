/* Given a string of even and odd numbers, find which is the sole even number or the sole odd number.

The return value should be 1-indexed, not 0-indexed.

Examples :
detectOutlierValue("2 4 7 8 10"); // => 3 - Third number is odd, while the rest of the numbers are even
detectOutlierValue("1 10 1 1");  //=> 2 - Second number is even, while the rest of the numbers are odd*/

function detectOutlierValue(string) {
    // parse the string into an array delimeter = ' ';
    var parsedNums = string.split(' ');
    var oddNums = [];
    var evenNums = [];

    // for each element check if the element is divisible by 2 to see whether the element is odd or even
    for (i = 0; i < parsedNums.length; i++) {
        //convert string to integer
        var parsedInt = Number.parseInt(parsedNums[i]);
        if (parsedInt % 2 === 0) {
            evenNums.push(i + 1);
        } else {
            oddNums.push(i + 1);
        }
    }

    if (evenNums.length === 1) {
        return evenNums[0];
    } else {
        return oddNums[0];
    }


}


function assertEqual(actual, expected) {
    if (actual !== expected) {
        console.log("FAILED : expected " + expected + ", but got " + actual);

    } else {
        console.log("SUCCESS");
    }
}

var actual1 = detectOutlierValue("2 4 7 8 10")
var expected1 = 3
var actual2 = detectOutlierValue("1 10 1 1")
var expected2 = 2

assertEqual(actual1, expected1);
assertEqual(actual2, expected2);