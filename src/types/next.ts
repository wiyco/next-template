import type { EmptyObject } from "./utils";

/**
 * Next.js dynamic route segments.
 * @example
 * ```tsx
 * import type { DynamicSegments } from "@/types";
 * export default async function Page({ params }: DynamicSegments<"slug">) {
 *   console.log(params.slug);
 *   // => "foo"
 * }
 * ```
 * @see {@link https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes}
 */
export type DynamicSegments<T extends string = "slug"> = {
  params: { [K in T]: string };
};

/**
 * Next.js search parameters.
 * @example
 * ```tsx
 * import type { SearchParams } from "@/types";
 * export default async function Page({ searchParams }: SearchParams<{ foo: string }>) {
 *   console.log(searchParams.foo);
 *   // => "bar"
 * }
 * ```
 * @see {@link https://nextjs.org/docs/app/api-reference/file-conventions/page#searchparams-optional}
 */
export type SearchParams<T extends object = EmptyObject> = {
  searchParams: { [K in keyof T]: string | string[] | undefined };
};
