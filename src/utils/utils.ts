import { ProfileProducts } from '../types/products';

export function captalizeFirstLetter(word: string): string {
  if (!word) return word;
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

export function getRandomProduct(products: ProfileProducts[]) {
  const randomIndex = Math.floor(Math.random() * products.length);
  return products[randomIndex];
}

export function formatPrice(price = 0) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price);
}
