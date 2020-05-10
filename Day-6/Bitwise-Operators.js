function getMaxLessThanK(n, k) {
    let max = 0;
    let current = -1;
    for (let a = 0; a < n; a++) {
        for (let b = a + 1; b <= n; b++) {
            current = a & b;
            if (current < k && current > max) max = current;
        }
    }
    return max;
}
