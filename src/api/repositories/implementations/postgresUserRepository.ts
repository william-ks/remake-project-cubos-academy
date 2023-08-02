import { prisma } from "../../../configs/prisma";
import { User } from "../../entities/user";
import { IUserRepository } from "../IUserRepository";

export class PostgresUserRepository implements IUserRepository {
    async findByEmail(email: string): Promise<User> {
        const user = await prisma.user.findFirst({
            where: {
                email
            }
        });

        return user;
    }

    async save(user: User): Promise<void> {
        await prisma.user.create({
            data: {
                name: user.name,
                email: user.email,
                password: user.password
            }
        })
    }
}