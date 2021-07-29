module.exports = function toReadable(n) {
    let cases = {
        '00': '',
        0: "zero ",
        1: "one ",
        2: "two ",
        3: "three ",
        4: "four ",
        5: "five ",
        6: "six ",
        7: "seven ",
        8: "eight ",
        9: "nine ",
        10: "ten ",
        11: "eleven ",
        12: "twelve ",
        13: "thirteen ",
        14: "fourteen ",
        15: "fifteen ",
        16: "sixteen ",
        17: "seventeen ",
        18: "eighteen ",
        19: "nineteen ",
        20: "twenty ",
        30: "thirty ",
        40: "forty ",
        50: "fifty ",
        60: "sixty ",
        70: "seventy ",
        80: "eighty ",
        90: "ninety ",
    };

    let result = "";

    n = String(n).split("");

    if (n.length === 3) {
        result += cases[n[0]] + "hundred ";
        n.shift();
        if (n[0] == 0 && n[1] == 0) return result.trim();
    }

    if (n.length === 2) {
        if (n[0] + n[1] in cases) {
            result += cases[n[0] + n[1]];
            n.splice(0, 2);
        } else {
            result += cases[n[0] + "0"];
            n.shift();
        }
    }

    if (n.length === 1) {
        result += cases[n[0]];
    }

    return result.trim();
};
