/* You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.

e.g. transposeTwoStrings(['Hello','World']);

should return:
H W
e o
l r
l l
o d */

function transposeTwoStrings(array) {


    // take each element in an array
    var resultString = '';

    for (i = 0; i < array[0].length; i++) {
        for (j = 0; j < array.length; j++) {
            resultString += array[j][i] + ' ';
            //console.log(resultString);
        }
        resultString += '\n';
    }
    return resultString;
}

var input1 = transposeTwoStrings(['Hello', 'World']);
console.log(input1);
console.log('\n');