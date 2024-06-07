import { describe, expect, test } from "vitest";

import { numToShortString } from "@/utils/converter";

/**
 * Number abbreviation test
 */
describe("numToShortString", () => {
  test("Convert number to short string", () => {
    expect(numToShortString(100)).toBe("100");
    expect(numToShortString(1000)).toBe("1.0K");
    expect(numToShortString(1234)).toBe("1.2K");
    expect(numToShortString(12345)).toBe("12.3K");
    expect(numToShortString(123456)).toBe("123K");
    expect(numToShortString(1000000)).toBe("1.0M");
    expect(numToShortString(1234567)).toBe("1.2M");
    expect(numToShortString(12345678)).toBe("12.3M");
    expect(numToShortString(123456789)).toBe("123M");
    expect(numToShortString(1000000000)).toBe("1.0B");
    expect(numToShortString(1234567890)).toBe("1.2B");
    expect(numToShortString(12345678901)).toBe("12.3B");
    expect(numToShortString(123456789012)).toBe("123B");
    expect(numToShortString(1000000000000)).toBe("1.0T");
    expect(numToShortString(1234567890123)).toBe("1.2T");
    expect(numToShortString(12345678901234)).toBe("12.3T");
    expect(numToShortString(123456789012345)).toBe("123T");
  });

  test("Edge cases", () => {
    expect(numToShortString(0)).toBe("0");
    expect(numToShortString(999)).toBe("999");
    expect(numToShortString(999999999999999)).toBe("1000T");
    expect(numToShortString(1000000000000000)).toBe("1e+15"); // Overflow case
  });
});
