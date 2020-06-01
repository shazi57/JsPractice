/*
function filter(array, fn) {
    var filteredArray = [];
    for (i = 0; i < array.length; i++) {
        if (fn(array[i])) {
            filteredArray.push(array[i]);
        }
    }
    return filteredArray;
}

function map(array, fn) {
    var mappedArray = [];
    for (i = 0; i < array.length; i++) {
        mappedArray.push(fn(array[i]));
    }
    return mappedArray;
}

function reduce(array, fn, initVal) {
    var result = initVal;
    for (i = 0; i < array.length; i++) {
        result = fn(result, array[i]);
    }
    return result;
}

function isEven(n) {
    return n % 2 === 0;
}

function multiply(a, b) {
    return a * b;
}

function subtract(a, b) {
    return a - b;
}

function add(a, b) {
    return a + b;
}

function squared(a) {
    return a * a;
}

function cubed(a) {
    return a * a * a;
}
*/

/*function assertArraysEqual(actual, expected) {
    if (actual.length !== expected.length) {
        console.log("FAILED : expected the array length of " + expected.length.toString() + ",but the length came out to be " + actual.length.toString());
        return false;
    }

    for (i = 0; i < actual.length; i++) {
        if (actual[i] !== expected[i]) {
            console.log("FAILED : expected " + expected[i].toString() + " but, " + actual[i].toString() + " was in place.");
            return false;
        }
    }

    console.log("PASSED")
    return true;
}*/

/*
var input1 = [1, 2, 3, 4, 5];
var input2 = [1, 2, 3, 4, -5];

// reduce test
var actual1 = reduce(input1, add, 0);
var expected1 = 15;
var actual2 = reduce(input2, subtract, 0);
var expected2 = -5;
var actual3 = reduce(input1, multiply, 1);
var expected3 = 120;
var test1 = assertArraysEqual([actual1, actual2, actual3], [expected1, expected2, expected3]);

// map test
var actual4 = map(input1, squared);
var actual5 = map(input1, cubed);
var expected4 = [1, 4, 9, 16, 25];
var expected5 = [1, 8, 27, 64, 125];
var test2 = assertArraysEqual(actual4, expected4);
var test3 = assertArraysEqual(actual5, expected5);

function assertArraysEqual(actual, expected, testName) {
    // your code here
    var failureMessage = 'FAILED [' + testName + '] Expected "'
        + expected + '",but got "' + actual + '"';

    if (actual.length !== expected.length) {
        console.log(failureMessage);
        return;
    }

    for (i = 0; i < actual.length; i++) {
        if (actual[i] !== expected[i]) {
            console.log(failureMessage);
            return;
        }
    }
    console.log("passed");
}

function assertObjectsEqual(actual, expected, testName) {
    // your code here

    var failureMessage = 'FAILED [' + testName + '] Expected ' + expected.toString() + ', but got ' + actual.toString();
    if (actual.length !== expected.length) {
        console.log(failureMessage);
        break;
    }

    for (var key in actual) {
        if (actual[key] !== expected[key]) {
            console.log(failureMessage);
            break;
        }
    }

    console.log("passed");
}
*/

// Note: This is a simple, albeit temporarily incorrect implementation of the standard Array method "every()":
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/every

// FUNCTION DEFINITION(S)
/*
function every(array, callbackFunction) {
    var doesEveryElementMatch = true;

    if (!Array.isArray(array) || array.length === 0) {
        return !doesEveryElementMatch;
    }

    for (var i = 0; i < array.length; i++) {
        if (!doesEveryElementMatch) {
            return doesEveryElementMatch
        }
        doesEveryElementMatch = callbackFunction(array[i]);
    }
    return doesEveryElementMatch;
}


// ASSERTION FUNCTION(S) TO BE USED

function assertEqual(expected, actual, testName) {
    if (expected !== actual) {
        console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
    } else {
        console.log('passed');
    }
}

// CALLBACK FUNCTIONS

function greaterThanTwo(a) {
    return a > 2;
}

// TESTS CASES

var inputArray1 = [1, 2, 3, 4, 5];
var actual1 = every(inputArray1, greaterThanTwo);
var expected1 = false;
assertEqual(expected1, actual1, "Test if all elements in array are greater than two");

//TEST EMPTY ARRAY
var inputArray2 = [];
var actual2 = every(inputArray2, greaterThanTwo);
var expected2 = false;
assertEqual(expected2, actual2, "Test if function can deal with empty array");

//TRUE CASE
var inputArray3 = [3, 4, 5, 6, 7];
var actual3 = every(inputArray3, greaterThanTwo);
var expected3 = true;
assertEqual(expected3, actual3, "Test if all elements are greater than two")
*/

// FUNCTION DEFINITION(S)
function map(array, callbackFunction) {
    var newArray = [];

    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        newArray.push(callbackFunction(element));
    }

    return newArray;
}

function cubeAll(numbers) {
    return map(numbers, function (n) {
        return n * n * n;
    });
}
// ASSERTION FUNCTION(S) TO BE USED

function assertArraysEqual(expected, actual, testName) {
    var hasSameLength = expected.length === actual.length;
    var failureMessaage =
        'Tested: ' + testName + ' ; expected: ' + expected + ', but got: ' + actual

    if (!hasSameLength) {
        console.log(failureMessaage)
        return;
    }

    for (i = 0; i < expected.length; i++) {
        if (expected[i] !== actual[i]) {
            console.log(failureMessaage);
            return;
        }
    }

    console.log('passed');
}

// TESTS CASES

var inputArray1 = [1, 2, 3, 4, 5];
var actual1 = cubeAll(inputArray1);
var expected1 = [1, 8, 27, 64, 125];

//NEGATIVE ELEMENTS
var inputArray2 = [-1, 2, -3, 4, -5];
var actual2 = cubeAll(inputArray2);
var expected2 = [-1, 8, -27, 64, -125];

//EMPTY ARRAY INPUT

var inputArray3 = [];
var actual3 = cubeAll(inputArray3);
var expected3 = [];

assertArraysEqual(expected1, actual1, "testing [1, 2, 3, 4, 5] to [1, 8, 27, 64, 125]");
assertArraysEqual(expected2, actual2, "testing [-1, 2, -3, 4, -5] to [-1, 8, -27, 64, -125]");
assertArraysEqual(expected3, actual3, "test empty array");
