import { uuid } from "uuidv4";
import { User } from "../../src/api/entities/user";
import {
  IUpdateUserRepoDTO,
  IUserRepository,
} from "./../../src/api/repositories/IUserRepository";

export class InMemoryUsersRepository implements IUserRepository {
  public users: User[] = [];

  async findByEmail(email: string): Promise<User | void> {
    const user = this.users.find((el) => el.email === email);

    return user;
  }

  async findById(id: string | number): Promise<void | User> {
    const user = this.users.find((el) => el.id === id);

    return user;
  }

  async update(props: IUpdateUserRepoDTO): Promise<void> {
    const userIndex = this.users.find((el) => el.id === props.id);
    this.users;
  }

  async save(user: User): Promise<void> {
    this.users.push({
      ...user,
      id: uuid(),
    });
  }
}
