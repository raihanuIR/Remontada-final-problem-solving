// 01. Solve Me First
// Add the two numbers together.
var solveMeFirst = function(a, b) {
    return a + b;
};

// 02. Multiply
// Multiply the two numbers.
var multiply = function(a, b) {
    return a * b;
};

// 03. Even or Odd
// A number is even if dividing by 2 leaves no remainder.
var evenOrOdd = function(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
};

// 04. Return Negative
// If the number is positive, flip it. Otherwise keep it as it is.
var makeNegative = function(number) {
    if (number > 0) {
        return -number;
    } else {
        return number;
    }
};

// 05. Opposite Number
// Put a minus sign in front to flip the sign.
var opposite = function(number) {
    return -number;
};

// 06. Simple Array Sum
// Go through every number and add it to a running total.
var simpleArraySum = function(ar) {
    var total = 0;
    for (var i = 0; i < ar.length; i++) {
        total = total + ar[i];
    }
    return total;
};

// 07. sleepIn
// We sleep in if it is NOT a weekday, or if we are on vacation.
var sleepIn = function(weekday, vacation) {
    if (weekday === false || vacation === true) {
        return true;
    } else {
        return false;
    }
};

// 08. monkeyTrouble
// Trouble when both smile or both do not smile (they are the same).
var monkeyTrouble = function(aSmile, bSmile) {
    if (aSmile === bSmile) {
        return true;
    } else {
        return false;
    }
};

// 09. sumDouble
// If the numbers are equal, double the sum.
var sumDouble = function(a, b) {
    var sum = a + b;
    if (a === b) {
        return sum * 2;
    } else {
        return sum;
    }
};

// 10. diff21
// If n is bigger than 21, double the difference.
var diff21 = function(n) {
    if (n > 21) {
        return (n - 21) * 2;
    } else {
        return 21 - n;
    }
};

// 11. parrotTrouble
// Trouble if the parrot is talking before 7 or after 20.
var parrotTrouble = function(talking, hour) {
    if (talking === true && (hour < 7 || hour > 20)) {
        return true;
    } else {
        return false;
    }
};

// 12. makes10
// True if either number is 10, or if they add up to 10.
var makes10 = function(a, b) {
    if (a === 10 || b === 10 || a + b === 10) {
        return true;
    } else {
        return false;
    }
};

// 13. nearHundred
// True if n is between 90-110 or between 190-210.
var nearHundred = function(n) {
    if (n >= 90 && n <= 110) {
        return true;
    }
    if (n >= 190 && n <= 210) {
        return true;
    }
    return false;
};

// 14. posNeg
// If negative is true, both numbers must be below 0.
// Otherwise, one must be below 0 and the other above 0.
var posNeg = function(a, b, negative) {
    if (negative === true) {
        return a < 0 && b < 0;
    }
    if (a < 0 && b > 0) {
        return true;
    }
    if (a > 0 && b < 0) {
        return true;
    }
    return false;
};

// 15. notString
// If the string already starts with "not", return it unchanged.
var notString = function(str) {
    if (str.substring(0, 3) === "not") {
        return str;
    } else {
        return "not " + str;
    }
};

// 16. Compare the Triplets
// Compare each pair; the bigger score gets 1 point.
var compareTriplets = function(a, b) {
    var alice = 0;
    var bob = 0;
    for (var i = 0; i < 3; i++) {
        if (a[i] > b[i]) {
            alice = alice + 1;
        } else if (a[i] < b[i]) {
            bob = bob + 1;
        }
    }
    return [alice, bob];
};

// 17. A Very Big Sum
// Same idea as the simple sum; JavaScript handles big numbers fine here.
var aVeryBigSum = function(ar) {
    var total = 0;
    for (var i = 0; i < ar.length; i++) {
        total = total + ar[i];
    }
    return total;
};

// 18. Staircase
// Row i has (n - i) spaces followed by i "#" characters.
var staircase = function(n) {
    var result = "";
    for (var i = 1; i <= n; i++) {
        var row = "";
        for (var s = 0; s < n - i; s++) {
            row = row + " ";
        }
        for (var h = 0; h < i; h++) {
            row = row + "#";
        }
        result = result + row;
        if (i < n) {
            result = result + "\n"; // new line between rows
        }
    }
    return result;
};

// 19. Grading Students
// Find the next multiple of 5. If it is less than 3 away, round up.
// Grades below 38 never change.
var gradingStudents = function(grades) {
    var result = [];
    for (var i = 0; i < grades.length; i++) {
        var grade = grades[i];
        if (grade >= 38) {
            var nextMultiple = grade;
            while (nextMultiple % 5 !== 0) {
                nextMultiple = nextMultiple + 1;
            }
            if (nextMultiple - grade < 3) {
                grade = nextMultiple;
            }
        }
        result.push(grade);
    }
    return result;
};

// 20. Time Conversion
// Split the time into hour, minutes+seconds, and AM/PM.
var timeConversion = function(s) {
    var hour = parseInt(s.substring(0, 2));
    var rest = s.substring(2, 8); // ":05:45"
    var period = s.substring(8, 10); // "AM" or "PM"

    if (period === "AM" && hour === 12) {
        hour = 0;
    } else if (period === "PM" && hour !== 12) {
        hour = hour + 12;
    }

    var hourText = String(hour);
    if (hour < 10) {
        hourText = "0" + hourText;
    }
    return hourText + rest;
};

// 21. String Repeat
// Add the string to the result n times.
var repeatStr = function(n, s) {
    var result = "";
    for (var i = 0; i < n; i++) {
        result = result + s;
    }
    return result;
};

// 22. Reversed Strings
// Read the string from the last letter to the first.
var solution = function(str) {
    var reversed = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i];
    }
    return reversed;
};

// 23. Sum of Positive
// Only add numbers that are greater than 0.
var positiveSum = function(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            total = total + arr[i];
        }
    }
    return total;
};

// 24. Grasshopper - Summation
// Add 1 + 2 + 3 + ... + num.
var summation = function(num) {
    var total = 0;
    for (var i = 1; i <= num; i++) {
        total = total + i;
    }
    return total;
};

// 25. Convert a Boolean to a String
var booleanToString = function(b) {
    if (b === true) {
        return "true";
    } else {
        return "false";
    }
};
