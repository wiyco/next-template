/**
 * Convert array to object with specified value.
 * @param array Array to convert.
 * @param value Custom value.
 * @returns Converted object.
 */
export function arrayToObject<T extends string | number | symbol, V>(
  array: T[],
  { value }: { value?: V } = {}
): Record<T, V> {
  return Object.fromEntries(array.map((key) => [key, value])) as Record<T, V>;
}

/**
 * Convert array to object with array indices as values.
 * @param array Array to convert.
 * @returns Converted object.
 */
export function arrayToIndexMap<T extends string | number | symbol>(
  array: T[]
): Record<T, number> {
  return Object.fromEntries(array.map((key, index) => [key, index])) as Record<
    T,
    number
  >;
}

/**
 * Convert array to object with custom values.
 * @param array Array to convert.
 * @param getValue Function to get value from item.
 * @returns Converted object.
 */
export function arrayToValueMap<T extends string | number | symbol, V>(
  array: T[],
  getValue: (item: T, index: number) => V
): Record<T, V> {
  return Object.fromEntries(
    array.map((key, index) => [key, getValue(key, index)])
  ) as Record<T, V>;
}
