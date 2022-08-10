function radianToDegree(radian) {
    let degree = radian * 57.2958;
    return degree;
}
let isradian = 199;
let isresult = radianToDegree(isradian);
const result = isresult.toFixed(2);
console.log(result);