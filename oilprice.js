function oilPrice(number1, number2, number3) {
    let digel = 114;
    let petrol = 130;
    let octen = 135;
    if (typeof number1 !== "number" || typeof number2 !== "number" || typeof number3 !== "number") {
        return "Please enter a number!";
    }

    let digelPrice = number1 * digel
    let petrolPrice = number2 * petrol;
    let octenPrice = number3 * octen;
    const sum = digelPrice + petrolPrice + octenPrice;
    return sum;
}

const price = oilPrice(30, 20, 10);
console.log(price);
