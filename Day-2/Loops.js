/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let i;
    for (i = 0; i < s.length; i++) {
        if (s[i].match(/[aeiou]/ig))
            console.log(s[i]);
    }
    for (i = 0; i < s.length; i++) {
        if (!s[i].match(/[aeiou]/ig))
            console.log(s[i]);
    }
}