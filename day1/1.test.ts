import { chai } from '../deps.ts';
import calcDepthIncreases from './1.ts';
const expect = chai.expect;

Deno.test('example', () => {
	const depthValues = [
		49, 55, 49, 10, 49, 55, 51, 10, 49, 55, 52, 10, 49, 54, 51, 10, 49, 54, 49,
		10,
	];
	const res = calcDepthIncreases(depthValues);
	expect(res).to.equal(9);
});
