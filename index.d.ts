/**
 * Will fire `callback` `offset` milliseconds after the last call to
 * the returned function
 *
 * @param callback function to debounce
 * @param offset time in MS to wait after last call to `callback`
 * @param leading boolean if the debounce should fire the first time called
 *
 */
export const debounce: <T extends Function>(
  callback: T,
  offset: number,
  leading?: boolean,
) => T
/**
 *  Throttle will fire `callback` at max every `offset` milliseconds
 *
 * @param callback function to debounce
 * @param offset time in MS to wait between calls to `callback`
 */
export const throttle: <T extends Function>(callback: T, offset: number) => T
