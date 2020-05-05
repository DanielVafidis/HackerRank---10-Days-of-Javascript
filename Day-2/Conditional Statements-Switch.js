function getLetter(s) {
    let letter = s.charAt(0);
    switch (letter) {
        case ('a' || 'e' || 'i' || 'o' || 'u'):
            return 'A';
            break;
        case ('b' || 'c' || 'd' || 'f' || 'g'):
            return 'B';
            break;
        case ('h' || 'j' || 'k' || 'l' || 'm'):
            return 'C';
            break;
        default:
            return 'D';
            break;
    }
    return result[0];
}