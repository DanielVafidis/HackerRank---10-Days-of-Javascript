function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match ALL occurrences of numbers in a string.
     */

    let re = RegExp('\\d+', 'g');

    // \d is a digit (a character in the range 0-9), and + means 1 or more times. So, \d+ is 1 or more digits. (the first is used to escape)
    // The g modifier is used to perform a global match (find all matches rather than stopping after the first match).

    /*
     * Do not remove the return statement
     */
    return re;
}