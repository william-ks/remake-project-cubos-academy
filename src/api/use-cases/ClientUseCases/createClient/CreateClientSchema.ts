import { z } from "zod";

export const CreateClientSchema = z.object({
  name: z.string({
    required_error: "Name is required",
  }),
  email: z.string({
    required_error: "email is required",
  }),
  cpf: z
    .string({
      required_error: "CPF is required",
    })
    .min(11)
    .max(11),
  phone: z
    .string({
      required_error: "Phone is required",
    })
    .min(14)
    .max(14),
  zipCode: z.string().nullable(),
  complement: z.string().nullable(),
  neighborhood: z.string().nullable(),
  city: z.string().nullable(),
  state: z.string().nullable(),
});
