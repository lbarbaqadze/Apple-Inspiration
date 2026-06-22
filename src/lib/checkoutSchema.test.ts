import { describe, it, expect } from 'vitest';
import { checkoutSchema } from './checkoutSchema'; 

describe('Checkout Validation', () => {
  it('should return error if name is empty', () => {
    const invalidData = { fullName: '', address: '123 Street', city: 'City', zipCode: '12345' };
    const { error } = checkoutSchema.validate(invalidData);
    expect(error).toBeDefined();
  });

  it('should pass if all data is valid', () => {
    const validData = { 
      fullName: 'John Doe', 
      address: '123 Apple St', 
      city: 'Tbilisi', 
      zipCode: '0102' 
    };
    const { error } = checkoutSchema.validate(validData);
    expect(error).toBeUndefined(); 
  });
});