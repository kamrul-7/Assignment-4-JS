function publicBusFare(people) {
    if (typeof people !== "number") {
        return "Please enter a number!";
    }
    let bus = Math.floor(people / 50);
    people -= 50 * bus;

    let microBus = Math.floor(people / 11);
    people -= 11 * microBus;
    const cost = people * 250;

    return cost;
}
const number = publicBusFare(365);
console.log(number);