function getBit(num, bitPosition) {
    return (num >> bitPosition) & 1;
}
console.log(getBit(1, 1));
