function firstLast6 (array){
    if(array[0] == 6){
        return true;
    }
    if(array[array.length -1] == 6){
        return true;
    }
    return false;
}

function has23 (array){
    if(array[0] == 2 || array[1] == 3){
        return true;
    }
    if(array[0] == 3 || array[1] == 2){
        return true;
    }
    return false;
}
function fix23 (array){
    if(array[1] == 2 && array[2] == 3){
        array[2] = 0;
    }
    if(array[0] == 2 && array[1] == 3){
        array[1] = 0;
    }
    return array;
}
function countYZ (string){
    var answer = 0;
    string = string.toLowerCase();
    for(var i = 0; i < string.length; i++){
        if(string[i] == "y" && string[i+1] == " "){
            answer++;
        }
        if(string[i] == "z" && string[i+1] == " "){
            answer++;
        }
    }
    if(string[string.length - 1] == "y" || string[string.length - 1] == "z"){
        answer++;
    }
    return answer;
}
function endOther (stringOne, stringTwo){
    stringOne = stringOne.toLowerCase();
    stringTwo = stringTwo.toLowerCase();
    if(stringOne.length > stringTwo.length) {
        if (stringOne.lastIndexOf(stringTwo) == stringOne.length - stringTwo.length) {
            return true;
        }
    }
        if(stringTwo.length > stringOne.length){
            if(stringTwo.lastIndexOf(stringOne) == stringTwo.length - stringOne.length){
                return true;
        }
    }
    if(stringOne == stringTwo){
            return true;
    }
    return false;
}
function starOut(string){
    var answer = "";
    for(var i = 0; i < string.length; i++){
        if(string[i] != "*" && string[i+1] != "*" && string[i-1] != "*"){
            answer = answer + string[i];
        }
    }
    return answer;
}
function getSandwich(string){
    if(string.indexOf("bread") == string.lastIndexOf("bread")){
        return "";
    }
    if(string.indexOf("bread") != -1 == string.lastIndexOf("bread") != -1){
        return string.substring(string.indexOf("bread") + 5, string.lastIndexOf("bread"))
    }
    return "";
}
function canBalance(array) {
    var answer = 0;
    var answerTwo = 0;
    for(var i = 0; i < array.length; i++) {
        answer += array[i];
        answerTwo = 0;
        for (var e = i + 1; e < array.length; e++) {
            answerTwo += array[e]
        }
        if (answer == answerTwo) {
            return true;

        }

    }
    return false;
}
function countClumps(array){
    var sum = 0;
    for(var i = 0; i < array.length; i++){
        if(array[i] == array[i - 1] && array[i] != array[i+1]){
            sum += 1;
        }
    }
    return sum;
}
function evenlySpaced(a, b, c){
    var max = Math.max(a, b, c);
    var min = Math.min(a, b, c);
    var med = (max + min)/ 2;
    if(med == a || med == b || med == c){
        return true;
    }
    return false;
}


