/**
 * Fetcher function for SWR
 * @param key - URL to fetch data from
 * @see {@link https://swr.vercel.app}
 */
export async function fetcher(key: string) {
  return fetch(key).then((res) => res.json());
}
