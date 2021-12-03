const decoder = new TextDecoder('utf-8');
const decodedInput = decoder.decode(Deno.readFileSync('./day3/3.in'));
const input = decodedInput.split('\n');

const flipBit = (bit: string) => Number(!Number(bit)).toString();

const calcPowerConsumption = (input: string[]): number => {
	let finalGammaBinary: string[] = [];
	let finalEpsilonBinary: string[] = [];

	Array.from(input[0]).forEach((bit: string, index: number) => {
		let matchingBitCount = 0;
		let nonMatchingBitCount = 0;

		input.forEach((binaryNum: string) => {
			if (binaryNum[index] === bit) {
				matchingBitCount++;
			} else {
				nonMatchingBitCount++;
			}
		});

		if (matchingBitCount > nonMatchingBitCount) {
			finalGammaBinary.push(bit);
			finalEpsilonBinary.push(flipBit(bit));
		} else {
			finalGammaBinary.push(flipBit(bit));
			finalEpsilonBinary.push(bit);
		}
	});

	return (
		parseInt(finalGammaBinary.join(''), 2) *
		parseInt(finalEpsilonBinary.join(''), 2)
	);
};

console.log(calcPowerConsumption(input));
