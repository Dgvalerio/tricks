/**
 * map
 * @param {Array} [data] - O conteúdo que será exibido.
 */
const map = (data) => data.map((d) => d);

/**
 * filter
 * @param {Array} data - O conteúdo que será exibido.
 * @param {any} filter - ?.
 */
const filter = (data, filter) => data.filter((d) => d === filter);

/**
 * find
 * @param {Array} data - O conteúdo que será exibido.
 * @param {any} find - ?.
 */
const find = (data, find) => data.find((d) => d === find);

/**
 * findIndexOf
 * @param {Array} data - O conteúdo que será exibido.
 * @param {any} of - ?.
 */
const findIndexOf = (data, of) => data.findIndex((d) => d === of);

/**
 * fill
 * @param {Array} [data] - O conteúdo que será exibido.
 * @param {any} item - ?.
 * @param {any} pos - ?.
 */
const fill = (data, item, pos) => data.fill(item, pos);

/**
 * some
 * @param {Array} [data] - O conteúdo que será exibido.
 * @param {any} item - ?.
 */
const some = (data, item) => data.some((d) => d === item);

/**
 * every
 * @param {Array} [data] - O conteúdo que será exibido.
 * @param {any} item - ?.
 */
const every = (data, item) => data.every((d) => d === item);

const splice = () => {};
const slice = () => {};

console.table([
  { name: 'map', in: '[0, 0, 0, 0]', out: map([0, 0, 0, 0]).toString() },
  { name: 'filter', in: '[0, 0, 1, 0]', out: filter([0, 0, 1, 0], 1).toString() },
  { name: 'find', in: '[1, 1, 0, 0]', out: find([1, 1, 0, 0], 1).toString() },
  { name: 'findIndexOf', in: '[1, 1, 1, 0]', out: findIndexOf([1, 1, 1, 0], 0).toString() },
  { name: 'fill', in: '[0, 0, 0, 0]', out: fill([0, 0, 0, 0], 3, 2).toString() },
  { name: 'some', in: '[1, 0, 0, 1]', out: some([1, 0, 0, 1], 0).toString() },
  { name: 'every', in: '[0, 0, 0, 1]', out: every([0, 0, 0, 1], 0).toString() },
]);







