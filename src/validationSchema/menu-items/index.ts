import * as yup from 'yup';

export const menuItemValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  price: yup.number().integer().required(),
  ingredients: yup.string(),
  allergens: yup.string(),
  restaurant_id: yup.string().nullable().required(),
});
