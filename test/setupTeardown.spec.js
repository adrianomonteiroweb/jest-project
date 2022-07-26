const adventure = require('../src/setupTeardown');

const { specialists } = adventure;

/*
Num universo não tão distante, um grupo de aventureiros da Trybe enfrentam uma série de testes.
O grupo parte em direção ao sucesso, mas,
devido a ameaça de criaturas temíveis, o grupo não chegará inteiro ao fim.
Após cada aventura um de nossos aventureiros cairá.
Cada um dos testes abaixo verifica a quantidade de aventureiros após cada iteração.
Sua missão aqui é:

  - Use a função randomAttack do objeto adventure
  que remove um dos aventureiros toda vez que é chamada,
  ela deve funcionar entre cada teste.
  Opcional:
  - Para ficar mais visível, imprima na tela após cada teste o grupo de aventureiros restante.
  - No fim dos testes, imprima uma mensagem com o nome do aventureiro que sobreviveu.

PS: Os codinomes dos aventureiros são reais! Tentem descobrir quem é quem!

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

adventure.randomAttack = jest.fn();

const randomAttack = () => {
  const randomSpecialistIndex = Math.floor(Math.random() * specialists.length);
  specialists.splice(randomSpecialistIndex, 1);
};

describe('quem sobreviveu?', () => {
  const nameSpecialists = () => specialists.map((spececialist) => spececialist.nome);

  beforeEach(() => randomAttack());

  afterEach(() => console.log(`${(nameSpecialists()).join(', ')} ainda estão na batalha!`));

  afterAll(() => console.log(`${specialists[0].nome} foi o único sobrevidente!`));

  test('depois da primeira aventura', () => {
    expect(specialists.length).toBe(5);
  });
  test('depois da segunda aventura', () => {
    expect(specialists.length).toBe(4);
  });
  test('depois da terceira aventura', () => {
    expect(specialists.length).toBe(3);
  });
  test('depois da quarta aventura', () => {
    expect(specialists.length).toBe(2);
  });
  test('depois da quinta aventura', () => {
    expect(specialists.length).toBe(1);
  });
});
