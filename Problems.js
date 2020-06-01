//Altitude Deltas//
function sumAltitudeDeltas(array, index1, index2) {
    var total = 0;
    for (var i = index1; i < index2; i++) {
        if (array[i] < array[i + 1]) {
            total += (array[i + 1] - array[i]) * 2;
        }
        else {
            total += array[i] - array[i + 1]
        }
    }
    return total;

}

function solution(array) {
    var result = "";
    var frontCursor = 0;
    while (frontCursor < array.length) {
        var tempCursor = frontCursor + 2;
        var tempString = "";
        if (array[tempCursor] - array[frontCursor] === 2) {
            while (Math.abs(array[tempCursor + 1] - array[tempCursor]) === 1) {
                tempCursor++;
            }
            tempString = array[frontCursor].toString() + '-' + array[tempCursor].toString();
            result = result + ',' + tempString;
            frontCursor = tempCursor + 1;
        }
        else {
            tempString = array[frontCursor].toString();
            result = result + "," + tempString;
            frontCursor += 1;
        }
    }
    return result.substr(1, result.length - 1);
}

function assertArraysEquals(expected, actual) {
    for (var i = 0; i < expected.length; i++) {
        if (actual[i] !== expected[i]) {
            console.log("FAILED : Expected " + expected[i].toString() + " But, We Got " + actual[i].toString());
            return;
        }
    }
    console.log("Passed");
}

function splitPairs(string) {
    var result = [];
    var tempStr = "";
    if (string.length % 2 === 1) {
        string = string + '-'
    }
    for (i = 0; i < string.length; i = i + 2) {
        tempStr = string.substr(i, 2);
        result.push(tempStr);
    }
    return result;
}

function highestScoringWord(string) {
    var scoreBoard = "-abcdefghijklmnopqrstuvwxyz";
    var wordList = string.split(" ");
    var maxScore = 0;
    var maxScoreWord = "";
    for (x = 0; x < wordList.length; x++) {
        var score = 0;
        var word = wordList[x]
        for (i = 0; i < word.length; i++) {
            score += scoreBoard.indexOf(word[i]);
        }
        if (score > maxScore) {
            maxScore = score;
            maxScoreWord = word;
        }
    }
    return maxScoreWord;
}

var input1 = sumAltitudeDeltas([1, 2, 3, 1], 0, 3);
var input2 = sumAltitudeDeltas([5, 3, 6, 7, 2], 2, 4);
var input3 = sumAltitudeDeltas([5, 3, 6, 7, 2], 0, 1);
var input4 = sumAltitudeDeltas([5, 3, 6, 7, 2], 0, 4);
var input5 = sumAltitudeDeltas([4, 1, 4, 0, 20, 13], 1, 4);
var actual = [input1, input2, input3, input4, input5];
var expected = [6, 7, 2, 15, 50];

assertArraysEquals(expected, actual);

var input1 = solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
var input2 = solution([-4, -3, -2, -1, 2, 3, 5, 6, 12, 13, 14, 15, 17]);
var exp1 = "-6,-3-1,3-5,7-11,14,15,17-20";
var exp2 = "-4--1,2,3,5,6,12-15,17";
var actual = [input1, input2];
var expected = [exp1, exp2];

var input1 = splitPairs('abcde');
console.log(input1);

assertArraysEquals(expected, actual);

var input1 = highestScoringWord("i luv you");

var customerData = {
    'Joe': {
        visits: 1
    },
    'Carol': {
        visits: 2
    },
    'Howard': {
        visits: 3,
    },
    'Carrie': {
        visits: 4
    }
};

function greetCustomer(firstName) {
    var greeting = "";
    for (var name in customerData) {
        if (name.toString() === firstName) {
            var numVisit = customerData[firstName]['visits'];
            if (numVisit === 1) {
                greeting = "Welcome back, " + firstName + "! We're glad you liked us the first time!";
                break;
            }
            else if (numVisit > 1) {
                greeting = "Welcome back, " + firstName + "! So glad to see you again!";
                break;
            }
        }
        else {
            greeting = 'Welcome! Is this your first time?';
        }
    }
    return greeting;
}

var input1 = greetCustomer('Carol');



function shapeArea(n) {
    if (n === 1) {
        return 1;
    } else {
        return shapeArea(n - 1) + 4 * (n - 1);
    }

}

var input10 = shapeArea(4);

function almostIncreasingSequence(sequence) {
    var count = 0;

    for (var i = 0; i < sequence.length; i++) {
        if (sequence[i] <= sequence[i - 1]) {
            count++;

            if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]) return false;

        }
    }

    return count <= 1;
}
var input11 = almostIncreasingSequence([1, 2, 1, 2]);




