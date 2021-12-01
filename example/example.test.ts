import { chai } from '../deps.ts';
import test from './example.ts';

Deno.test('example', () => {
	const expect = chai.expect;

	expect(test()).to.equal('hello world');
});
