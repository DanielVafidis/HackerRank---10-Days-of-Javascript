function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
     * followed by one or more letters.
     */

    let re = /^(Mr\.|Mrs\.|Dr\.|Er\.)[a-zA-Z]*$/

    // ^(Mr\.|Mrs\.|Dr\.|Er\.) => starts with ( Mr. or Ms. or Dr. or Er. )
    // [a-zA-Z]*$ => followed by 1 or more Letters

    /*
     * Do not remove the return statement
     */
    return re;
}