/**
 * Return a new object using the target object's stringified values as its keys
 * and its keys as the values
 * ```js
 * invertObject({ a: 1, b: 2, c: 3 }) // { "1": "a", "2": "b", "3": "c" }
 * ```
 */
export function invertObject(obj: Record<string, any>): Record<string, string> {
  const dict: Record<string, string> = {};
  for (const [key, value] of Object.entries(obj)) {
    dict[String(value)] = key;
  }

  return dict;
}
