export function myParseInt(strNum) {
    strNum = String(strNum);
    strNum = strNum.trim();

    let sign = 1;
    let result = 0;
    let i = 0;

    if (strNum[0] === '-') {
        sign = -1;
        i++;
    } else if (strNum[0] === '+') {
        i++;
    }

    if (i >= strNum.length || !isCharNumber(strNum[i])) {
        result = NaN;
    }

    while (i < strNum.length && !Number.isNaN(result)) {
        if (isCharNumber(strNum[i])) {
            result = result * 10 + Number(strNum[i]);
            i++;
        } else {
            i = strNum.length;
        }
    }

    return result * sign;
}

function isCharNumber(char) {
    return char >= '0' && char <= '9';
}

console.log(myParseInt("0"));        // 0
console.log(myParseInt("123"));      // 123
console.log(myParseInt("-123"));     // -123
console.log(myParseInt("+123"));     // 123
console.log(myParseInt(" 123"));     // 123
console.log(myParseInt("123 "));     // 123
console.log(myParseInt(" 123 "));    // 123
console.log(myParseInt("abc"));      // NaN
console.log(myParseInt("123abc"));   // 123
console.log(myParseInt("abc123"));   // NaN
console.log(myParseInt(""));         // NaN
console.log(myParseInt(null));       // NaN
console.log(myParseInt(undefined));  // NaN
console.log(myParseInt("12 3"));     // 12
console.log(myParseInt("9007199254740992")); // 9007199254740992
console.log(myParseInt("-9007199254740992")); // -9007199254740992
console.log(myParseInt("1e3")); // 1
