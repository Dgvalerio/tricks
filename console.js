/**
 * Função para exibição de dados no console no formato de tabela.
 * @param {Object[] | Object} [data] - O conteúdo que será exibido.
 * @param {string[]} [columns] - Um array com o nome das colunas que serão exibidas.
 * @example
 * table([
 *   { id: 1, name: 'Davi' },
 *   { id: 2, name: 'Jefferson' },
 * ]);
 * // return:
 * ┌─────────┬────┬─────────────┐
 * │ (index) │ id │    name     │
 * ├─────────┼────┼─────────────┤
 * │    0    │ 1  │   'Davi'    │
 * │    1    │ 2  │ 'Jefferson' │
 * └─────────┴────┴─────────────┘
 * @example
 * table([
 *   { id: 1, name: 'Davi' },
 *   { id: 2, name: 'Jefferson' },
 * ], ['name']);
 * // return:
 * ┌─────────┬─────────────┐
 * │ (index) │    name     │
 * ├─────────┼─────────────┤
 * │    0    │   'Davi'    │
 * │    1    │ 'Jefferson' │
 * └─────────┴─────────────┘
 */
const table = (data, columns) => console.table(data, columns);

/** Função para retornar as propriedades de um elemento HTML. */
const dir = () => console.dir(document.body);

/**
 * Função para exibir algo no console em formatação de alerta.
 * @param {any} message - Conteúdo que será retornado.
 */
const warn = (message) => console.warn(message);

/**
 * Função para exibir algo no console em formatação de erro.
 * @param {any} message - Conteúdo que será retornado.
 */
const error = (message) => console.error(message);

/**
 * Função para exibir algo caso uma condição seja falsa.
 * @param {any} condition - Conteúdo que será retornado.
 * @param {any} message - Conteúdo que será retornado.
 * @example
 * assert(1 === 2, 'algo');
 * // return: Assertion failed: algo
 * assert(2 === 2, 'algo');
 * // no return.
 */
const assert = (condition, message) => console.assert(condition, message);

/** Função para limpar o console. */
const clear = () => console.clear();

const group = () => {
  console.group();
  const a = 1;
  const b = 2;

  console.log(a);
  console.log(b);
  console.log(a + b);
  console.groupEnd();
  console.group();
  const c = 3;
  const d = 4;

  console.log(c);
  console.log(d);
  console.log(c + d);
  console.groupEnd();
};

const time = () => {
  console.time(); // inicia o timer
  const a = 1;
  const b = 2;

  console.log(a);

  console.timeLog(); // informa o valor atual

  console.log(b);
  console.log(a + b);
  console.timeEnd(); // finaliza o timer e informa o total
};

const count = () => {
  const nomes = [
    'Davi',
    'Jefferson',
    'Hellem',
    'Hellem',
    'Helen',
    'Beatriz',
    'Davi',
  ];

  nomes.map((nome) => console.count(nome));

  console.count('Jefferson');
};

const style = () => console.log('%c something beautiful ', 'color: white; background: #0d0d0d; padding: 16px;');
