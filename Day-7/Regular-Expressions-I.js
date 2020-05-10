function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */

    let re = /^([aeiou]).*\1$/;


    // ^([aeiou]) => must start with any vowel
    // .* => followed by any number of any character
    // \1$ => ending with the same character as the first one (the same vowel)

    /*
     * Do not remove the return statement
     */
    return re;
}