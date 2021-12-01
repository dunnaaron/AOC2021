import { chai } from '../deps.ts';
import calcDepthIncreases from './1.ts';
const expect = chai.expect;

Deno.test(
	'returns number of depth increases between three-depth windows',
	() => {
		const depthValues = [607, 618, 618, 617, 647, 716, 769, 792];
		const res = calcDepthIncreases(depthValues);
		expect(res).to.equal(5);
	}
);
