import { z } from 'zod';

export const createUserSchema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(8)
})

export type TcreateUserSchema = z.infer<typeof createUserSchema>