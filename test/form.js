import { Selector } from 'testcafe';

fixture('Test Cafe smoke test')
  .page('https://figuras-angular-mc0atadkn-jose-antonio-s-projects.vercel.app/circulo');

test('Verificar título de la página', async (t) => {
  // Definir un selector para el título de la página
  const pageTitle = Selector('title');

  // Realizar la aserción
  await t
    .expect(pageTitle.innerText).eql('Calculadorafigurass');
});