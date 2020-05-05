/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try {
        let res = s.split("");
        res = res.reverse();
        res = res.join("");
        console.log(res);
    }
    catch (e) {
        console.log("s.split is not a function");
        console.log(s);
    }
}