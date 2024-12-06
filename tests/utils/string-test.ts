import {assertEquals} from "@std/assert";
import {limitLength, substringAfterLast, substringBefore} from "../../utils/strings.ts";

Deno.test(function limitLengthTest() {
  assertEquals(limitLength("test", 4), "test");
  assertEquals(limitLength("dlouhy test", 6), "dlouhy...");
});

Deno.test(function substringAfterLastTest() {
  assertEquals(substringAfterLast("test 123", " "), "123");
  assertEquals(substringAfterLast("test 123 654", "12"), "3 654");
  assertEquals(substringAfterLast("test 123 654", "444"), "");
});

Deno.test(function substringBeforeTest() {
  assertEquals(substringBefore("test 123", " "), "test");
  assertEquals(substringBefore("test 123 654", "654"), "test 123 ");
  assertEquals(substringBefore("test 123 654", "xxx"), null);
});
