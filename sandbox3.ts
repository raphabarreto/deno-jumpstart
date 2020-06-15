import { v4 } from "https://deno.land/std/uuid/mod.ts";

const uid = v4.generate();
console.log(uid);

import { readJson, writeJson } from "https://deno.land/std/fs/mod.ts";

const jsonObject = await readJson('ninjas.json');
console.log(jsonObject);

const clients = [
  {
    "name": "Raphael",
    "age": 27,
    "email": "tnt.raphael@gmail.com"
  }
]

await writeJson('clients.json', clients, { spaces: 2 });
console.log('Created clients.json')
