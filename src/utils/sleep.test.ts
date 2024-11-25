import { describe, expect, it, vi } from "vitest";

import { sleep } from "./sleep";

describe("sleep", () => {
  it("should resolve after specified time", async () => {
    vi.useFakeTimers();
    const startTime = Date.now();
    const promise = sleep(1000);

    vi.advanceTimersByTime(1000);
    await promise;

    const endTime = Date.now();
    expect(endTime - startTime).toBe(1000);
    vi.useRealTimers();
  });

  it("should not resolve before specified time", async () => {
    vi.useFakeTimers();
    const promise = sleep(1000);

    vi.advanceTimersByTime(500);
    const resolved = await Promise.race([
      promise.then(() => true),
      Promise.resolve(false),
    ]);

    expect(resolved).toBe(false);
    vi.advanceTimersByTime(500); // Clean up remaining time
    await promise; // Clean up promise
    vi.useRealTimers();
  });

  it("should handle zero milliseconds", async () => {
    const result = await sleep(0);
    expect(result).toBeUndefined();
  });

  it("should handle negative milliseconds", async () => {
    const result = await sleep(-1);
    expect(result).toBeUndefined();
  });
});
