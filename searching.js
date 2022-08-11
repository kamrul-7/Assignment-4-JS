function isJavaScriptFile(string) {
    if (typeof string !== "string") {
        return "Please enter a string!";
    }

    if (string.indexOf(".js") > -1) {
        return true;
    }
    return false;

}

let arr = 'kamrul.js';
let isarray = isJavaScriptFile(arr);
console.log(isarray);
