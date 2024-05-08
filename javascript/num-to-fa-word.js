function toFaWord(num) {

    let uniqNumbers = { // A dictionary for unique numbers that we cannot construct from their combinations
        1: 'یک',
        2: "دو",
        3: "سه",
        4: "چهار",
        5: "پنج",
        6: "شش",
        7: "هفت",
        8: "هشت",
        9: "نه",
        10: "ده",
        11: "یازده",
        12: "دوازده",
        13: "سیزده",
        14: "چهارده",
        15: "پانزده",
        16: "شانزده",
        17: "هفده",
        18: "هجده",
        19: "نوزده",
        20: "بیست",
        30: "سی",
        40: "چهل",
        50: "پنجاه",
        60: "شصت",
        70: "هفتاد",
        80: "هشتاد",
        90: "نود",
        100: "صد",
        200: "دویست",
        300: "سیصد",
        400: "چهارصد",
        500: "پانصد",
        600: "ششصد",
        700: "هفتصد",
        800: "هشتصد",
        900: "نهصد"
    }

    let decimalShortScaleNames = [ // 10 ^(3n + 3) and here the n is index of array items :-D
        "",
        "هزار", // thousand
        "میلیون", // million 
        "میلیارد", // billion 
        "تریلیون", // trillion 
        "کوآدریلیون", // quadrillion 
        // ...
    ]

    const digitSpliter = (c_num, n = 1, rmzero = false) => {
        let res = [];
        for (let i = 0; c_num > 0; i++) {
            taked_number = c_num % Math.pow(10, n * (i + 1));
            res.push(taked_number / ((rmzero === true) ? Math.pow(10, n * i) : 1)); // the "res" is used like stack data structure
            c_num -= taked_number;
        }
        return res;
    }

    const nameOfThreDigitNumber = (num) => {
        let res = []
        if (num < 20)
            return uniqNumbers[num]

        digitSpliter(num, 1, false).forEach(d => {
            if (d != 0) {
                res.unshift(uniqNumbers[d]);
            }
        });
        return res.join(" و ");
    }

    let sumSet = digitSpliter(num, 3, true) // We get a stack whose member with index n is multiplied by the formula (10 ^(3n + 3))! Now we can name the number ^_^

    let res = [];
    for (let i = 0; i < sumSet.length; i++) {
        num = sumSet[i]
        if (num != 0) {
            res.unshift(nameOfThreDigitNumber(num) + " " + decimalShortScaleNames[i]);
        }
    }

    return res.join(" و ");
}