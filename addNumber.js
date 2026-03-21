function addnumber(...num) {
    console.log("NUmbers are ", num);
    let sum = 0;
    for (let n of num) {
        sum += n;
    }
    return sum;
}

module.exports = addnumber