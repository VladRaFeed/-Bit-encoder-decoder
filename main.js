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



// BitCoder(data);


const bitData = [
"0xEE",
"0x0",
"0x10E",
"0x0",
"0x20096D",
"0x0",
"0x0",
"0xEE",
"0x0",
"0x106",
"0x0",
"0x1FA5B7",
"0x0",
"0x0",
"0xF2",
"0x0",
"0x13C",
"0x0",
"0x27A0A0",
"0x0",
"0x1",
"0x27"
]

const BitDeCoder = (data) => {
    const deCodeNums = []
    let i = 0;

    for (const element of data) {
        // console.log(element)
        const num = DeCoder(element);
        deCodeNums.push(num);
    }

    const object = {
        "V1": null,
        "A1": null,
        "W1": null,
        "rW1": null,
        "Wh1": null,
        "rWh1": null,
        "PF1": null,
        "V2": null,
        "A2": null,
        "W2": null,
        "rW2": null,
        "Wh2": null,
        "rWh2": null,
        "PF2": null,
        "V3": null,
        "A3": null,
        "W3": null,
        "rW3": null,
        "Wh3": null,
        "rWh3": null,
        "PF3": null,
        "T": null
    }
    
    for (const key in object) {
        object[key] = deCodeNums[i]
        i++;
    }
}

const LetterDeCode = (el) => {
    let num = 0;

    switch (el) {
        case "A":
            num = 10;
            break;
        case "B":
            num = 11;
            break;
        case "C":
            num = 12;
            break;
        case "D":
            num = 13;
            break;
        case "E":
            num = 14;
            break;
        case "F":
            num = 15;
            break;
    }

    if (num === 0) {
        num += Number(el);
    }

    return num;
}

const reverseDeCodeStr = (str) => {
    str = str.slice(2, str.length);
    let newStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }

    return newStr;
}

const DeCoder = (element) => {
    let bitNum = element;
    let sum = 0;
    bitNum = reverseDeCodeStr(bitNum);
    for (let i = 0; i < bitNum.length; i++) {
        const decodeNum = LetterDeCode(bitNum[i]);
        sum += decodeNum * Math.pow(16, i);
    }
    // console.log(sum)
    return sum;
}

BitDeCoder(bitData);