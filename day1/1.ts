const decoder = new TextDecoder('utf-8');
const decodedInput = decoder.decode(Deno.readFileSync('./day1/1.in'));
const input = decodedInput
	.split('\n')
	.filter((n) => n)
	.map(Number);

const calcDepthIncreases = (depthValues: number[]) => {
	const totalDepthIncreases = depthValues.reduce(
		(prev: number, curr: number, index: number, arr: number[]) => {
			return curr < arr[index + 1] ? prev + 1 : prev;
		},
		0
	);

	console.log(totalDepthIncreases);

	return totalDepthIncreases;
};

export default calcDepthIncreases;

calcDepthIncreases(input);
