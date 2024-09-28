import {assertEquals} from "@std/assert";
import {limitLength, substringAfterLast} from "../../utils/strings.ts";

Deno.test(function limitLengthTest() {
  assertEquals(limitLength("test", 4), "test");
  assertEquals(limitLength("dlouhy test", 6), "dlouhy...");
});

Deno.test(function substringAfterLastTest() {
  assertEquals(substringAfterLast("test 123", " "), "123");
  assertEquals(substringAfterLast("test 123 654", "12"), "3 654");
  assertEquals(substringAfterLast("test 123 654", "444"), "");
});
