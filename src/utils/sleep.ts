/**
 * Sleep for a given amount of time.
 * @param ms The amount of time to sleep in milliseconds.
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
