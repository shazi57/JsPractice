/* Flip every chunk of n characters in a string, where n is any positive integer greater than 1.

Note that this is intentionally very similar to the previous problem.

Please focus on getting a working solution with the tools you know well.

Practice the interactive/collaborative interview style that's described in the documentation.

Example:
var input = 'a short example';
var output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma

Breaking this example down piece by piece:
'a sho' -> 'ohs a'
'rt ex' -> 'xe tr'
'ample' -> 'elpma'

-> 'ohs axe trelpma' */

function flipEveryNChars(input, n) {
    var resultString = '';


    // for every chunk
    for (var i = 0; i < input.length; i += n) {
        var stringChunk = input.substr(i, n)
        //for every characters in reverse order in that chunk
        for (var k = stringChunk.length - 1; k >= 0; k--) {
            resultString += stringChunk[k];
        }
    }
    console.log(resultString);
    return resultString;
}

var input = 'a short example';
var output = flipEveryNChars(input, 5);

var input2 = 'abcdefghijkl'
var output = flipEveryNChars(input2, 4);

