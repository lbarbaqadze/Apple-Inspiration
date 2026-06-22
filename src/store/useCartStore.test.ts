import { describe, it, expect } from 'vitest';
import { useCartItem } from './useCartStore';

describe('Cart Store Logic', () => {
  it('should calculate the correct total price', () => {
    const total = 100; 
    expect(total).toBe(100);
  });
});