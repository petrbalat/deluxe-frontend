import {assertEquals} from "@std/assert";
import { czkCurrencyFormat } from "../../utils/numbers.ts";

Deno.test(function czkCurrencyFormatTest() {
  assertEquals(czkCurrencyFormat.format(100), "100\xa0Kč");
  assertEquals(czkCurrencyFormat.format(1000), "1\xa0000\xa0Kč");
  assertEquals(czkCurrencyFormat.format(10000), "10\xa0000\xa0Kč");
});
