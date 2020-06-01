var users = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    }
];

/*If the value of the id property is odd, add the user's email to the return array
If the value of the id property is even, your function should create a new string for the given user, add the street, suite, city, and zipcode, each separated by a space and a comma, as one string, to the return array */

function generateSampleView(users) {
    var resultArray = [];

    // for each element in array
    for (i = 0; i < users.length; i++) {
        var obj = users[i];
        // figure out whether value (id property) is even or odd
        if (obj['id'] % 2 == 1) {
            resultArray.push(obj['email']);
        } else {
            // else (odd) -> create a new string, add users[i][street] .. etc
            var arrayOfStrings = Object.values(obj['address']);
            arrayOfStrings.pop()
            var resultString = arrayOfStrings.join(', ')
            resultArray.push(resultString);
        }
    }
    return resultArray;
}

function assertArraysEqual(expected, actual, testName) {

    console.log(testName);

    var hasSameElements = true;
    var hasSameLength = true;
    var notAnEmptyArray = true;

    if (actual.length === 0) {
        console.log("FAILED : empty array")
        notAnEmptyArray = false;
    }

    if (expected.length !== actual.length) {
        console.log(`FAILED : expected the length ${expected.length}, but got ${actual.length}`);
        hasSameLength = false;
    }


    for (var i = 0; i < actual.length; i++) {
        if (actual[i] !== expected[i]) {
            console.log(`FAILED : exepected ${expected[i]} at index ${i}, but got ${actual[i]}`);
            hasSameElements = false;
        }
    }

    if (!hasSameElements) {
        console.log(`EXPECTED : ${expected} \n ACTUAL : ${actual}`);
        return;
    }

    if (hasSameElements, hasSameLength, notAnEmptyArray) {
        console.log("passed");
    }
}

/*var dummyExpected = [1, 2, 3, 4, 5];
var dummyActual = [6, 5, 4, 3, 2, 1];
assertArraysEqual(dummyExpected, dummyActual, "testing with dummy vars");*/

var input = users;
var expected = ["Sincere@april.biz", "Victor Plains, Suite 879, Wisokyburgh, 90566-7771"];
var actual = generateSampleView(users);
assertArraysEqual(expected, actual, "testing if generateSampleViews return correct output");

