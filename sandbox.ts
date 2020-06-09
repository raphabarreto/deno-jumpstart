// reading files

const data = await Deno.readTextFile('readme.txt');
console.log(data);

// writing files

const encoder = new TextEncoder();
const text = encoder.encode('Hello again, ninjas');

await Deno.writeFile('readme.txt', text);


// renaming and removing files

await Deno.rename('readme.txt', 'deleteme.txt');
await Deno.remove('deleteme.txt');
