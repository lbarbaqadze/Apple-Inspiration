import Joi from 'joi';

export const checkoutSchema = Joi.object({
  fullName: Joi.string().trim().min(3).max(30).required().messages({ 
    'string.min': 'The Name Must Consist of at least 3 characters',
    'string.max': 'The Name must not exceed 30 characters',
    'string.empty': 'Name is required'
  }),
  address: Joi.string().trim().min(5).max(100).required().messages({
    'string.min': 'The Address must consist of at least 5 characters',
    'string.max': 'The Address must not exceed 100 characters',
    'string.empty': 'Address is required'
  }),
  city: Joi.string().trim().min(2).max(20).required().messages({
    'string.min': 'The City must consist of at least 2 characters',
    'string.max': 'The City must not exceed 20 characters',
    'string.empty': 'City is required'
  }),
  zipCode: Joi.string().trim().alphanum().min(4).max(10).required().messages({
    'string.min': 'The Zip Code must consist of at least 4 characters',
    'string.max': 'The Zip Code must not exceed 10 characters',
    'string.empty': 'Zip Code is required'
  }),
});