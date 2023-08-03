import { User } from "../entities/user"

export interface data {
    user: Omit<User, 'password'>
    expiresIn: string
}

export interface IJwt {
    sign(data: data): string
}
