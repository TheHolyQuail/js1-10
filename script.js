//decides if you should sleep in
function sleepIn(x,y) {
    if(x == y){
        return true;
    } else if (x == false || y == true) {
        return true;
    } else {
        return false;
    }
}

function monkey_trouble(x,y) {
    if(x == y){
        return true;
    } else {
        return false;
    }
}

function String_times(str, n) {
    var result = str;

    for (var i = n-1; i > 0; i--) {
        result += str;
    }

    return result;
}

function front_times(str, n) {
    var result = "";
    var front = str.substring(0,3);

    for (var i = n; i > 0;i--){
        result += front;
    }

    return result;
}

function string_bits (str) {
    var result = "";
    var digit = "";
    var LENGTH = str.length;

    for (var i = 0; i <= LENGTH;i+=2){
        digit = str.substring(i, i+1);
        result += digit;
    }
    return result;
}

function caughtSpeeding (speed, birthday) {
    if (birthday) {
        if (speed <= 65){
            return 0;
        } else if(speed <= 85){
            return 1;
        } else {
            return 2;
        }
    } else if (speed <= 60){
        return 0;
    } else if(speed <= 80){
        return 1;
    } else {
        return 2;
    }
}

function fizz_buzz (num) {
    var lettNum = num.toString();
    if (num % 3 == 0 && num % 5 == 0){
        return "FizzBuzz";
    } else if(num % 3 == 0){
        return "Fizz";
    }else if(num % 5 == 0){
        return "Buzz";
    } else {
        return lettNum + "!";
    }
}

function teaParty (tea, candy) {
    if (tea < 5 || candy < 5){
        return 0;
    } else if(tea >= candy * 2 || candy >= tea * 2){
        return 2;
    } else {
        return 1;
    }
}

function blackjack (x, y) {
    var checkX = x <= 21;
    var checkY = y <= 21;

    if (!checkX && !checkY){
        return 0;
    } else {
        if (!checkX){
            return y;
        } else if(!checkY){
            return x;
        } else if(x > y){
            return x;
        } else if(y > x){
            return y;
        }
    }
}

function loneSum (x, y, z) {
    var result = 0;
    if (x == y){
        if (y == z) {
            result = 0;
        } else {
            result = z;
        }
    } else if (y == z){
        if (x == y) {
            result = 0;
        } else {
            result = x;
        }
    } else if (z == x){
        if (x == y) {
            result = 0;
        } else {
            result = y;
        }
    } else {
        result = x + y + z;
    }
    return result;
}

//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += " " + sleepIn(true, false);
    document.getElementById("output").innerHTML += " " + monkey_trouble(true, true);
    document.getElementById("output").innerHTML += " " + String_times("hi", 3);
    document.getElementById("output").innerHTML += " " + front_times("bye", 2);
    document.getElementById("output").innerHTML += " " + string_bits("hello");
    document.getElementById("output").innerHTML += " " + caughtSpeeding(300, false);
    document.getElementById("output").innerHTML += " " + fizz_buzz(30);
    document.getElementById("output").innerHTML += " " + teaParty(10,5);
    document.getElementById("output").innerHTML += " " + blackjack(22,11);
    document.getElementById("output").innerHTML += " " + loneSum(2,5,5);
}
