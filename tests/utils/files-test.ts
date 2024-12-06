import {assertEquals} from "@std/assert";
import {listFiles} from "../../utils/files.ts";

Deno.test(async function listFilesTest() {
  const files = await listFiles(".");
  assertEquals(files.length, 6);

  const jsons = await listFiles(".", {endsWith: ".json"});
  assertEquals(jsons.length, 1);
});
