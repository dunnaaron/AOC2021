const decoder = new TextDecoder('utf-8');
const decodedInput = decoder.decode(Deno.readFileSync('./day1/1.in'));
const input = decodedInput
	.split('\n')
	.filter((n) => n)
	.map(Number);

const calcDepthIncreases = (depthValues: number[]) => {
	let depthWindowIncreases = 0;
	depthValues.reduce(
		(prev: number, curr: number, index: number, arr: number[]) => {
			if (index + 2 < arr.length) {
				const threeDepthWindow = curr + arr[index + 1] + arr[index + 2];
				if (threeDepthWindow > prev && prev !== 0) {
					depthWindowIncreases += 1;
				}

				return threeDepthWindow;
			}

			return prev;
		},
		0
	);

	console.log(depthWindowIncreases);

	return depthWindowIncreases;
};

export default calcDepthIncreases;

calcDepthIncreases(input);
