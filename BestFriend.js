function isBestFriend(num1, num2) {
    if (typeof num1.name !== "string" || typeof num2.name !== "string" || typeof num1.friend !== "string" || typeof num2.friend !== "string") {
        return "Please Enter a string!";
    }
    if (num1.name == num2.friend && num1.friend == num2.name) {

        return true;
    }
    return false;
}
let friends = {
    name: "Babul",
    friend: "Abul",

}
let frien = {
    name: 'Abul',
    friend: 6,
}
const result = isBestFriend(friends, frien);
console.log(result);