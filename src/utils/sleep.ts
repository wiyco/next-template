/**
 * Sleep for a given amount of time in milliseconds
 * @param ms - The amount of time to sleep in milliseconds
 */
function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export { sleep };
