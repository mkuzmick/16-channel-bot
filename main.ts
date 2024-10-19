import { config } from "https://deno.land/x/dotenv/mod.ts";

// Load .env.dev for development environment
const env = config({ path: ".env.dev" });

console.log(`Development environment loaded with api key: ${env.OPENAI_API_KEY}`);



export function add(a: number, b: number): number {
  return a + b;
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log("Add 2 + 3 =", add(2, 3));
}
