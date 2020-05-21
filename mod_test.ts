import { assertStrContains } from "https://deno.land/std/testing/asserts.ts";
import envPaths from "./mod.ts";

Deno.test("make sure it didnt throw any error", () => {
  const path = envPaths("test", {
    suffix: "foo",
  });

  assertStrContains(path.data, "test-foo");
  assertStrContains(path.config, "test-foo");
  assertStrContains(path.cache, "test-foo");
  assertStrContains(path.log, "test-foo");
  assertStrContains(path.temp, "test-foo");
});
