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
    }]

const BitCoder = (data) => {

    const codeElementValues = [];

    for (const element of data) { // Перебір масиву об'єктів
        // console.log(element);
        for (const index in element) { // Перебір об'єкту, його ключів та значень
            console.log(`${index} : ${element[index]}`);
            // const codeEl = element[index] % 16;

        }
    }

}

const TestCoder = () => {
    
}

// BitCoder(data);