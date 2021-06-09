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

const dir = () => {
  console.dir(document.body);
};

const warn = () => {
  console.warn('warn');
};

const error = () => {
  console.error('error');
};

const assert = () => {
  console.assert(1 === 2, 'algo'); // Só retorna o errado
  console.assert(2 === 2, 'algo');
};

const clear = () => {
  console.clear();
};

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
