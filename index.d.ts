/**
 * Will fire `callback` `offsetInMS` milliseconds after the last call to
 * the returned function
 *
 */
export const debounce: <T extends Function>(callback: T, offset: number) => T
/**
 *  Throttle will fire `callback` at max every `offset` milliseconds
 */
export const throttle: <T extends Function>(callback: T, offset: number) => T
