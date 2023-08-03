import { User } from '../../src/api/entities/user';
import { IUserRepository } from './../../src/api/repositories/IUserRepository';

export class InMemoryUsersRepository implements IUserRepository {
    public users: User[] = [];

    async findByEmail(email: string): Promise<User | void> {
        const user = this.users.find(el => el.email === email);

        return user
    }

    async save(user: User): Promise<void> {
        this.users.push(user)
    }
}