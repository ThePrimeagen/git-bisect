import { foo } from "./index.js";
import { test, expect, vitest } from "vitest";

test("foo", async () => {
    await (new Promise(res => setTimeout(res, 30000)));
    expect(foo(2)).toEqual(2 * 69);
}, 35000);
