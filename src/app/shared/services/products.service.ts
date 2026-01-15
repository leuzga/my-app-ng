import { Product }                      from '../../interfaces/product';
import { computed, Injectable, signal } from '@angular/core';

@Injectable()

export class ProductsService {

  private readonly products = signal<Product[]>([
    {
      id: 1,
      title: 'Keyboard',
      price: 100,
      categories: {
        1: 'Computing',
        2: 'Peripherals'
      }
    },
    {
      id: 2,
      title: 'Microphone',
      price: 35,
      categories: {
        3: 'Multimedia'
      }
    },
    {
      id: 3,
      title: 'Web Camera',
      price: 70,
      categories: {
        3: 'Multimedia',
        2: 'Peripherals'
      }
    },
    {
      id: 4,
      title: 'Headphones',
      price: 85,
      categories: {
        3: 'Multimedia',
        2: 'Peripherals'
      }
    },
    {
      id: 5,
      title: 'Mouse',
      price: 50,
      categories: {
        1: 'Computing',
        2: 'Peripherals'
      }
    },
    {
      id: 6,
      title: 'Laptop',
      price: 1200,
      categories: {
        1: 'Computing'
      }
    },
    {
      id: 7,
      title: 'Tablet',
      price: 600,
      categories: {
        1: 'Computing'
      }
    },
    {
      id: 8,
      title: 'Smartphone',
      price: 800,
      categories: {
        1: 'Computing'
      }
    },
    {
      id: 9,
      title: 'Speaker',
      price: 150,
      categories: {
        3: 'Multimedia'
      }
    },
    {
      id: 10,
      title: 'Router',
      price: 100,
      categories: {
        1: 'Computing'
      }
    }
  ]);

  getProducts = computed(() => this.products());

  getProductById(id: number) {
    return computed(() => this.products().find(p => p.id === id));
  }
}