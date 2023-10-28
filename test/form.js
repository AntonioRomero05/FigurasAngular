import { Selector } from 'testcafe';

fixture('Test Cafe smoke test')
  .page('https://figuras-angular-mc0atadkn-jose-antonio-s-projects.vercel.app/circulo');

test('Verificar la existencia de un input', async (t) => {
  // Definir un selector para el elemento input
  const inputElement = Selector('input');

  // Realizar la aserción para verificar si el elemento input existe
  await t
    .expect(inputElement.exists).ok('El elemento input debería existir en la página.');
});