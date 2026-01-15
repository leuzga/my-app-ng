import { SortPipe } from './sort.pipe';
import { Product } from '../../interfaces/product';

describe('SortPipe', () => {
  let pipe: SortPipe;
  let products: Product[];

  beforeEach(() => {
    pipe = new SortPipe();
    products = [
      { id: 1, title: 'Keyboard', price: 100, categories: { 1: 'Computing', 2: 'Peripherals' } },
      { id: 2, title: 'Microphone', price: 35, categories: { 3: 'Multimedia' } },
      { id: 3, title: 'Web Camera', price: 70, categories: { 3: 'Multimedia', 2: 'Peripherals' } },
      { id: 4, title: 'Headphones', price: 85, categories: { 3: 'Multimedia', 2: 'Peripherals' } },
      { id: 5, title: 'Mouse', price: 50, categories: { 1: 'Computing', 2: 'Peripherals' } },
      { id: 6, title: 'Laptop', price: 1200, categories: { 1: 'Computing' } },
      { id: 7, title: 'Tablet', price: 600, categories: { 1: 'Computing' } },
      { id: 8, title: 'Smartphone', price: 800, categories: { 1: 'Computing' } },
      { id: 9, title: 'Speaker', price: 150, categories: { 3: 'Multimedia' } },
      { id: 10, title: 'Router', price: 100, categories: { 1: 'Computing' } }
    ];
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('sorting by title', () => {
    it('should sort products alphabetically', () => {
      const result = pipe.transform(products, 'title');

      expect(result[0].title).toBe('Headphones');
      expect(result[1].title).toBe('Keyboard');
      expect(result[9].title).toBe('Web Camera');
    });
  });

  describe('sorting by price', () => {
    it('should sort products by price ascending', () => {
      const result = pipe.transform(products, 'price');

      expect(result[0].price).toBe(35);    // Microphone
      expect(result[1].price).toBe(50);    // Mouse
      expect(result[9].price).toBe(1200);  // Laptop
    });

    it('should handle products with same price', () => {
      const result = pipe.transform(products, 'price');
      const hundredPriceProducts = result.filter(p => p.price === 100);

      expect(hundredPriceProducts.length).toBe(2);  // Keyboard y Router
    });
  });

  describe('sorting by id', () => {
    it('should sort products by id ascending', () => {
      const shuffled = [...products].reverse();
      const result = pipe.transform(shuffled, 'id');

      expect(result[0].id).toBe(1);
      expect(result[9].id).toBe(10);
    });
  });

  describe('edge cases', () => {
    it('should return empty array when value is null', () => {
      expect(pipe.transform(null as any, 'title')).toEqual([]);
    });

    it('should return empty array when value is undefined', () => {
      expect(pipe.transform(undefined as any, 'title')).toEqual([]);
    });

    it('should return empty array when input is empty', () => {
      expect(pipe.transform([], 'title')).toEqual([]);
    });
  });

  describe('immutability', () => {
    it('should not mutate the original array', () => {
      const originalFirst = products[0];
      pipe.transform(products, 'title');

      expect(products[0]).toBe(originalFirst);
      expect(products[0].title).toBe('Keyboard');
    });

    it('should return a new array instance', () => {
      const result = pipe.transform(products, 'title');
      expect(result).not.toBe(products);
    });
  });
});