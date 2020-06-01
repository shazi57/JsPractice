/* Example:
var input = 'check out how interesting this problem is, it\'s insanely interesting!';
var output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn! */

function flipPairs(string) {

    // parse the input string and store all characters in the array
    var parsedChracters = string.split('');
    var resultArray = [];
    //console.log(parsedChracters);

    // for each pair of characters swap positions
    for (i = 0; i < parsedChracters.length; i += 2) {
        // store swapped characters in empty array
        var prevChar = parsedChracters[i]
        var nextChar = parsedChracters[i + 1];
        if (!prevChar) {
            resultArray.push(nextChar);
        } else if (!nextChar) {
            resultArray.push(prevChar)
        } else {
            resultArray.push(nextChar);
            resultArray.push(prevChar);
        }
    }

    //console.log(resultArray);
    // then convert the array to string using array.join();
    var resultString = resultArray.join('');
    //console.log(resultString);

    return resultString;
}

var input = 'check out how interesting this problem is, it\'s insanely interesting!';
var actual = flipPairs(input);
var expected = "hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!";

function assertEqual(expected, actual, testName) {
    if (expected !== actual) {
        console.log("Failed");
    } else {
        console.log("Success");
    }
}

assertEqual(expected, actual, "testing testing");