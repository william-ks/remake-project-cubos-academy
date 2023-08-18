import { z } from "zod";

export const UpdateClientSchema = z.object({
  name: z.string().min(3).nullable(),
  email: z.string().email().nullable(),
  cpf: z.string().nullable(),
  phone: z.string().nullable(),
  zipCode: z.string().nullable(),
  complement: z.string().nullable(),
  neighborhood: z.string().nullable(),
  city: z.string().nullable(),
  state: z.string().nullable(),
});
