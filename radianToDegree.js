function radianToDegree(radian) {
    if (typeof radian !== "number") {
        return "Please enter a number!";
    }

    let multi = radian * (180 / Math.PI);
    let degree = multi.toFixed(2)
    return degree;
}
let isradian = 44;
let isresult = radianToDegree(isradian);
const result = isresult;
console.log(result);