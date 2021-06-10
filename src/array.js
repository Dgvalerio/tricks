/**
 * map
 * @param {Array} [data] - O conteúdo que será exibido.
 */
export const map = (data) => data.map((d) => d);

/**
 * filter
 * @param {Array} data - O conteúdo que será exibido.
 * @param {any} filterField - ?.
 */
export const filter = (data, filterField) => data.filter((d) => d === filterField);

/**
 * find
 * @param {Array} data - O conteúdo que será exibido.
 * @param {any} findField - ?.
 */
export const find = (data, findField) => data.find((d) => d === findField);

/**
 * findIndexOf
 * @param {Array} data - O conteúdo que será exibido.
 * @param {any} of - ?.
 */
export const findIndexOf = (data, of) => data.findIndex((d) => d === of);

/**
 * fill
 * @param {Array} [data] - O conteúdo que será exibido.
 * @param {any} item - ?.
 * @param {any} pos - ?.
 */
export const fill = (data, item, pos) => data.fill(item, pos);

/**
 * some
 * @param {Array} [data] - O conteúdo que será exibido.
 * @param {any} item - ?.
 */
export const some = (data, item) => data.some((d) => d === item);

/**
 * every
 * @param {Array} [data] - O conteúdo que será exibido.
 * @param {any} item - ?.
 */
export const every = (data, item) => data.every((d) => d === item);

export const splice = () => {};
export const slice = () => {};

module.exports = {
  map, filter, find, findIndexOf, fill, some, every, splice, slice,
};
