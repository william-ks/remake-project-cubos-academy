import { z } from "zod";

export const UpdateUserSchema = z.object({
  name: z.string().min(3).nullable(),
  email: z.string().email().nullable(),
});
