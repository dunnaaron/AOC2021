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

const test = [
	'00100',
	'11110',
	'10110',
	'10111',
	'10101',
	'01111',
	'00111',
	'11100',
	'10000',
	'11001',
	'00010',
	'01010',
];

console.log(calcPowerConsumption(test));

/* -------------- PART 2 -------------- */

const calcOxygen = (input: string[]): number => {
	let oxygenRating: string[] = input;

	for (let index = 0; index < input[0].length; index++) {
		let matchingBitCount = 0;
		let nonMatchingBitCount = 0;
		const bit = oxygenRating[0][index];

		if (oxygenRating.length === 1) break;

		oxygenRating.forEach((binaryNum: string) => {
			if (binaryNum[index] === oxygenRating[0][index]) {
				matchingBitCount++;
			} else {
				nonMatchingBitCount++;
			}
		});

		if (matchingBitCount > nonMatchingBitCount) {
			oxygenRating = oxygenRating.filter(
				(binaryNum: string) => binaryNum[index] === bit
			);
		} else if (matchingBitCount === nonMatchingBitCount) {
			oxygenRating = oxygenRating.filter(
				(binaryNum: string) => binaryNum[index] === '1'
			);
		} else {
			oxygenRating = oxygenRating.filter(
				(binaryNum: string) => binaryNum[index] !== bit
			);
		}
	}

	return parseInt(oxygenRating.join(''), 2);
};

const calcCO2 = (input: string[]): number => {
	let co2Rating: string[] = input;

	for (let index = 0; index < input[0].length; index++) {
		let matchingBitCount = 0;
		let nonMatchingBitCount = 0;
		const bit = co2Rating[0][index];

		if (co2Rating.length === 1) break;

		co2Rating.forEach((binaryNum: string) => {
			if (binaryNum[index] === bit) {
				matchingBitCount++;
			} else {
				nonMatchingBitCount++;
			}
		});

		if (matchingBitCount < nonMatchingBitCount) {
			co2Rating = co2Rating.filter(
				(binaryNum: string) => binaryNum[index] === bit
			);
		} else if (matchingBitCount === nonMatchingBitCount) {
			co2Rating = co2Rating.filter(
				(binaryNum: string) => binaryNum[index] === '0'
			);
		} else {
			co2Rating = co2Rating.filter(
				(binaryNum: string) => binaryNum[index] !== bit
			);
		}
	}

	return parseInt(co2Rating.join(''), 2);
};

const calcLifeSupport = (input: string[]) => {
	return calcOxygen(input) * calcCO2(input);
};

console.log(calcLifeSupport(input));
