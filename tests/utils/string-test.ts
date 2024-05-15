import { assertEquals } from "$deno/testing/asserts.ts";
import { limitLength } from "../../utils/strings.ts";

Deno.test(function limitLengthTest() {
  assertEquals(limitLength("test", 4), "test");
  assertEquals(limitLength("dlouhy test", 6), "dlouhy...");
});
