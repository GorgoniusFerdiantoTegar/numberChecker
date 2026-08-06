const isPositive = (number) => {
    if (number > 0) {
        return true;
    } else {
        return false;
    }
}

const isNegative = (number) => {
    if (number < 0) {
        return true;
    } else {
        return false;
    }
}

const isZero = (number) => {
    if (number == 0) {
        return true;
    } else {
        return false;
    }
}

const isEven = (number) => {
    if (number% 2 == 0) {
        return true;
    } else {
        return false;
    }
}

const describeNumber = (number) => {
    const positive = isPositive(number);
    const negative = isNegative(number);
    const zero = isZero(number);
    const even = isEven(number);
    const odd = !isEven(number);

    const descNum = {
        positive,
        negative,
        zero,
        even,
        odd,
    };

    return descNum;
}

console.log(describeNumber(8))
console.log(describeNumber(-3))
console.log(describeNumber(0))
console.log(describeNumber(7))
