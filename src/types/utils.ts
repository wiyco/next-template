/**
 * Don't use `{}` as a type. `{}` actually means "any non-nullish value".
 * * If you want a type meaning "any object", you probably want `object` instead.
 */
export type AnyObject = Record<string, unknown>;

/**
 * Don't use `{}` as a type. `{}` actually means "any non-nullish value".
 * * If you want a type meaning "empty object", you probably want `Record<string, never>` instead.
 */
export type EmptyObject = Record<never, never>;

/**
 * Don't use `{}` as a type. `{}` actually means "any non-nullish value".
 * * If you really want a type meaning "any non-nullish value", you probably want `NonNullable<unknown>` instead.
 */
export type StrictNonNullable = NonNullable<unknown>;

/**
 * Merge two types.
 * * If `N` is an object, merge `M` and `N`.
 * * If `N` is not an object, return `M`.
 */
export type Merge<M, N> = N extends AnyObject ? M : Omit<M, keyof N> & N;
