import { serve } from "https://deno.land/std/http/server.ts";

const server = serve({ port: 3000 });
console.log('listening for request on port 3000');

for await (const request of server) {
  const url = request.url;
  request.respond({ body: `Hello ninjas, you visited ${url}`})
}
