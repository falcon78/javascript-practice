function getBit(num: number, bitPosition: number) : number {
	return (num >> bitPosition) & 1;
}

console.log(getBit(1, 1));