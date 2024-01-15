import { z } from 'zod'

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
)
export const CheckoutSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must contain at least 2 characters')
    .max(30, 'Name must contain at most 40 characters'),
  'email-address': z.string().email(),
  'phone-number': z.string().regex(phoneRegex, 'Invalid number'),
  address: z
    .string()
    .min(3, 'Address must contain at least 3 characters')
    .max(50, 'Address must contain at most 50 characters'),
  'zip-code': z.string().regex(/^\d{5}-\d{3}$/, 'Invalid ZIP Code'),
  city: z
    .string()
    .min(3, 'City must contain at least 3 characters')
    .max(20, 'Address must contain at most 20 characters'),
  country: z
    .string()
    .min(3, 'Country must contain at least 3 characters')
    .max(20, 'Country must contain at most 20 characters'),
  'payment-method': z.string(),
  'e-money-number': z
    .string()
    .min(9, 'Number must contain 9 characters')
    .max(9, 'Number must contain 9 characters'),
  'e-money-pin': z
    .string()
    .min(4, 'Pin must contain 4 characters')
    .max(4, 'Pin must contain 4 characters'),
})
