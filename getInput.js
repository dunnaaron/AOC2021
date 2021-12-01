import { config } from './deps.ts';

const { COOKIE: cookie, YEAR: year } = config();
const day = parseInt(Deno.args[1]);
const dir = `./day${day}/`;
const inputPath = dir + `${day}.in`;
const filePath = dir + `${day}.ts`;
const testPath = dir + `${day}.test.ts`;

if (!cookie || !year || !day) {
	console.log('Error. Incorrect cookie, year, or day');
	Deno.exit(-1);
}

try {
	const res = await fetch(`https://adventofcode.com/${year}/day/${day}/input`, {
		headers: { Cookie: `session=${cookie};` },
	});
	const body = new Uint8Array(await res.arrayBuffer());

	await Deno.mkdir(dir);
	await Deno.open(inputPath, { read: true, write: true, create: true });
	await Deno.writeTextFile(inputPath, body, {
		create: true,
		append: true,
	});
	Deno.close(inputPath);

	await Deno.create(filePath);
	await Deno.create(testPath);
} catch (err) {
	console.log('ERROR: ', err);
}
