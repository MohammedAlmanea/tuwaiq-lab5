import { TypeOf, z } from 'zod';

export const parkSchema = z.object({
  body: z.object({
    id: z
      .string({
        required_error: 'Field "id" is required',
      })
      .min(2, 'id must be greater than or equal to 2'),
    name: z
      .string({
        required_error: 'Field "name" is required',
      })
      .min(4, 'name must be greater than or equal to 4'),
    type: z.enum(['rollercoaster', 'thriller', 'water'], {
      required_error: 'Field "type" is required',
      invalid_type_error: 'Allowed values are rollercoaster,thriller,water',
    }),
    tickets: z.number({
      required_error: 'Field "tickets" is required',
      invalid_type_error: 'Allowed type is number',
    }),
    price: z.number({
      required_error: 'Field "price" is required',
      invalid_type_error: 'Allowed type is number',
    }),
  }),
});

export type ParkTypeSchema = TypeOf<typeof parkSchema>['body'];
