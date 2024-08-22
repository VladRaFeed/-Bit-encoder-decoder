const data = [
    {
        "V1": 237.81,
        "A1": 0,
        "W1": 270,
        "rW1": 0,
        "Wh1": 2099565,
        "rWh1": 0, "PF1": 0,
        "V2": 238.3,
        "A2": 0,
        "W2": 262,
        "rW2": 0,
        "Wh2": 2074039,
        "rWh2": 0,
        "PF2": 0,
        "V3": 241.74,
        "A3": 0.17,
        "W3": 316,
        "rW3": 0,
        "Wh3": 2597024,
        "rWh3": 0,
        "PF3": 0.68,
        "T": 39
    }, 
    {
        "V1": 237.81,
        "A1": 0,
        "W1": 270,
        "rW1": 0,
        "Wh1": 2099565,
        "rWh1": 0, "PF1": 0,
        "V2": 238.3,
        "A2": 0,
        "W2": 262,
        "rW2": 0,
        "Wh2": 2074039,
        "rWh2": 0,
        "PF2": 0,
        "V3": 241.74,
        "A3": 0.17,
        "W3": 316,
        "rW3": 0,
        "Wh3": 2597024,
        "rWh3": 0,
        "PF3": 0.68,
        "T": 39
    }, ]

const BitCoder = (data) => {

    const codeElementValues = [];

    for (const element of data) { // Перебір масиву об'єктів
        const values = [];
        for (const index in element) { // Перебір об'єкту, його ключів та значень
            const num = Math.round(element[index]);
            values.push(Coder(num));
        }
        codeElementValues.push(values);
    }

    console.log("Final result: ");
    console.log(codeElementValues)
}

const LetterTransform = (num) => {
    if (num <= 9) {
        return num;
    }

    switch (num) {
        case 10:
            num = "A";
            break;
        case 11:
            num = "B";
            break;
        case 12:
            num = "C";
            break;
        case 13:
            num = "D";
            break;
        case 14:
            num = "E";
            break;
        case 15:
            num = "F";
            break;
    }

    return num;
}

const reverseString = (str) => {
    let newStr = "0x";
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }

    return newStr;
}

const Coder = (num) => {
    let newBitNum = "";

    if (num === 0) {
        newBitNum = "0x0";
        return newBitNum;
    }

    while (num !== 0) {
        const tempNum = num;
        newBitNum += LetterTransform(tempNum % 16);
        num = Math.floor(num / 16);
    }
    newBitNum = reverseString(newBitNum);
    return newBitNum;
}

BitCoder(data);