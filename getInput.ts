import { config } from './deps.ts';

const { COOKIE: cookie, YEAR: year } = config();
const day = Deno.args[0] ?? new Date().getDate().toString();
const dir = `./day${day}/`;
const inputPath = dir + `${day}.in`;
const filePath = dir + `${day}.ts`;
const testPath = dir + `${day}.test.ts`;

const createInputFile = async (body: string): Promise<void> => {
	const openedFile: Deno.File = await Deno.open(inputPath, {
		read: true,
		write: true,
		create: true,
	});

	await Deno.writeTextFile(inputPath, body, {
		create: true,
		append: true,
	});

	Deno.close(openedFile.rid);
};

try {
	if (!cookie || !year || !day) {
		throw new Error('Incorrect cookie, year, or day');
	}

	const res: Response = await fetch(
		`https://adventofcode.com/${year}/day/${day}/input`,
		{
			headers: { Cookie: `session=${cookie};` },
		}
	);
	const inputFileBody: string = new Uint8Array(
		await res.arrayBuffer()
	).toString();

	await Deno.mkdir(dir);

	await createInputFile(inputFileBody);

	await Deno.create(filePath);
	await Deno.create(testPath);
} catch (err) {
	console.error(err);
}
