function isJavaScriptFile(string) {
    if (string.indexOf(".js") > -1) {
        return true;
    }
    return false;

}

let arr = ["app.js", "file.png", "image.js", "doc.jpg"];
for (i of arr) {
    let isarray = isJavaScriptFile(i);
    console.log(isarray);
}