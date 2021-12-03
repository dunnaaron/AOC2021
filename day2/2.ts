const decoder = new TextDecoder('utf-8');
const decodedInput = decoder.decode(Deno.readFileSync('./day2/2.in'));
const input = decodedInput.split('\n').filter((n) => n);

export interface DirectionPair {
	direction: string;
	distance: number;
}

interface DirectionValues {
	forward: number;
	up: number;
	down: number;
	[key: string]: any;
}

const directionValues: DirectionValues = {
	forward: 1,
	up: -1,
	down: 1,
};

export const parseDirection = (direction: string): DirectionPair => {
	const pair = direction.split(' ');

	return { direction: pair[0], distance: parseInt(pair[1]) };
};

export const calcDirections = (
	parsedDirections: string[]
): [x: number, y: number] => {
	let x = 0;
	let y = 0;

	parsedDirections.forEach((direction: string) => {
		const directionPair = parseDirection(direction);

		if (directionPair.direction === 'forward') {
			x += directionValues[directionPair.direction] * directionPair.distance;
		} else {
			y += directionValues[directionPair.direction] * directionPair.distance;
		}
	});

	return [x, y];
};

const multiplyXY = (input: string[]) => {
	const calculatedXY = calcDirections(input);

	return calculatedXY[0] * calculatedXY[1];
};

console.log(multiplyXY(input));
