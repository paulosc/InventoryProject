import { Product } from './product.model';

describe('Product Interface', () => {
  it('should have the correct properties', () => {
    const product: Product = {
      id: 1,
      categoryId: 1,
      name: 'Test Product',
      description: 'This is a test product',
      price: 99.99,
      category: 'electronics/phones',
      available: true,
    };

    expect(product).toBeTruthy();
    expect(product.categoryId).toBe(1);
    expect(product.id).toBe(1);
    expect(product.name).toBe('Test Product');
    expect(product.description).toBe('This is a test product');
    expect(product.price).toBe(99.99);
    expect(product.category).toBe('electronics/phones');
    expect(product.available).toBeTrue();
  });
});
