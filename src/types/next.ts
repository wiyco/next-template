import type { EmptyObject } from "./utils";

/**
 * Next.js dynamic route segments.
 * @example
 * ```tsx
 * import type { DynamicSegments } from "@/types";
 * export default async function Page({ params }: DynamicSegments<"slug">) {
 *   console.log((await params).slug);
 *   // => "foo"
 * }
 * ```
 * @see {@link https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes}
 */
export type DynamicSegments<T extends string = "slug"> = {
  params: Promise<{ [K in T]: string }>;
};

/**
 * Next.js search parameters.
 * @example
 * ```tsx
 * import type { SearchParams } from "@/types";
 * export default async function Page({ searchParams }: SearchParams<{ foo: string }>) {
 *   console.log((await searchParams).foo);
 *   // => "bar" or ["bar", "baz"] or undefined
 * }
 * ```
 * @see {@link https://nextjs.org/docs/app/api-reference/file-conventions/page#searchparams-optional}
 */
export type SearchParams<T extends object = EmptyObject> = {
  searchParams: Promise<{ [K in keyof T]: string | string[] | undefined }>;
};
