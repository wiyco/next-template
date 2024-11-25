import { describe, expect, it } from "vitest";

import { cn } from "./cn";

describe("cn", () => {
  it("should merge class names correctly", () => {
    expect(cn("foo", "bar")).toBe("foo bar");
    expect(cn("foo", undefined, "bar")).toBe("foo bar");
    expect(cn("foo", null, "bar")).toBe("foo bar");
  });

  it("should handle conditional class names", () => {
    const condition = true;
    expect(cn("foo", condition && "bar")).toBe("foo bar");
    expect(cn("foo", !condition && "bar")).toBe("foo");
  });

  it("should merge tailwind classes correctly", () => {
    expect(cn("p-2 p-4")).toBe("p-4");
    expect(cn("pt-2 p-4")).toBe("p-4");
    expect(cn("text-red-500 text-blue-500")).toBe("text-blue-500");
  });

  it("should handle arrays", () => {
    expect(cn(["foo", "bar"])).toBe("foo bar");
    expect(cn("base", ["conditional", "classes"])).toBe(
      "base conditional classes"
    );
  });
});
