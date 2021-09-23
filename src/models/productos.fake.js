import faker from 'faker/locale/es';

export const unProducto = () => ({
  title: faker.commerce.product(),
  price: faker.commerce.price(),
  thumbnail: faker.image.imageUrl(),
});

export const variosProductos = (cuantos = 10) =>
  Array.from({ length: cuantos }, unProducto);
