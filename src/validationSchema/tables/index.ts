import * as yup from 'yup';

export const tableValidationSchema = yup.object().shape({
  table_number: yup.number().integer().required(),
  capacity: yup.number().integer().required(),
  restaurant_id: yup.string().nullable().required(),
});
