/**
 * Fetcher function for SWR
 * @param url - URL to fetch data from
 * @see {@link https://swr.vercel.app}
 */
export async function fetcher(url: string, init?: RequestInit) {
  return fetch(url, init).then((res) => res.json());
}
