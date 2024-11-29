import { describe, expect, it } from "vitest";

import { arrayToIndexMap, arrayToObject, arrayToValueMap } from "./to-object";

describe("arrayToObject", () => {
  it("should create an object with specified value", () => {
    const array = ["a", "b", "c"];
    const result = arrayToObject(array, { value: 1 });
    expect(result).toEqual({
      a: 1,
      b: 1,
      c: 1,
    });
  });

  it("should create an object with undefined values when no value is specified", () => {
    const array = ["x", "y"];
    const result = arrayToObject(array);
    expect(result).toEqual({
      x: undefined,
      y: undefined,
    });
  });

  it("should work with number keys", () => {
    const array = [1, 2, 3];
    const result = arrayToObject(array, { value: "test" });
    expect(result).toEqual({
      1: "test",
      2: "test",
      3: "test",
    });
  });
});

describe("arrayToIndexMap", () => {
  it("should create an object with array indices as values", () => {
    const array = ["a", "b", "c"];
    const result = arrayToIndexMap(array);
    expect(result).toEqual({
      a: 0,
      b: 1,
      c: 2,
    });
  });

  it("should work with empty array", () => {
    const array: string[] = [];
    const result = arrayToIndexMap(array);
    expect(result).toEqual({});
  });

  it("should work with number keys", () => {
    const array = [10, 20, 30];
    const result = arrayToIndexMap(array);
    expect(result).toEqual({
      10: 0,
      20: 1,
      30: 2,
    });
  });
});

describe("arrayToValueMap", () => {
  it("should create an object with custom values using getValue function", () => {
    const array = ["a", "b", "c"];
    const getValue = (item: string, index: number) => `${item}-${index}`;
    const result = arrayToValueMap(array, getValue);
    expect(result).toEqual({
      a: "a-0",
      b: "b-1",
      c: "c-2",
    });
  });

  it("should work with empty array", () => {
    const array: string[] = [];
    const getValue = (item: string) => item.toUpperCase();
    const result = arrayToValueMap(array, getValue);
    expect(result).toEqual({});
  });

  it("should handle complex value transformations", () => {
    const array = ["a", "b"];
    const getValue = (item: string, index: number) => ({
      original: item,
      index,
      modified: item.toUpperCase(),
    });
    const result = arrayToValueMap(array, getValue);
    expect(result).toEqual({
      a: { original: "a", index: 0, modified: "A" },
      b: { original: "b", index: 1, modified: "B" },
    });
  });
});
