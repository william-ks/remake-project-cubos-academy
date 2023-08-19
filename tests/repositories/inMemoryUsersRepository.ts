import { User } from "../../src/api/entities/user";
import {
  IFindByParameters,
  IFindOtherParameters,
  IUpdateUserRepoDTO,
  IUserRepository,
} from "./../../src/api/repositories/IUserRepository";

export class InMemoryUsersRepository implements IUserRepository {
  public users: User[] = [];

  async find_by(props: IFindByParameters): Promise<void | User> {
    const { key, value } = props;
    const user = await this.users.find((el) => {
      return el[key] === value;
    });

    return user;
  }

  async find_other(props: IFindOtherParameters): Promise<void> {
    const { userId, email } = props;

    const found = await this.users.find((el) => {
      return el.email === email && el.id !== userId;
    });

    if (found) {
      throw new Error("Already exists a user with this E-mail:400");
    }
  }

  async update(props: IUpdateUserRepoDTO): Promise<void> {
    const { id, dataToUpdate } = props;
    const user = this.users.find((el) => el.id === id);
    const newUser = { ...user, ...dataToUpdate };

    const oldArray = this.users.filter((el) => {
      return el.id !== id;
    });

    this.users = [...oldArray];
    this.users.push(newUser);
  }

  async save(user: User): Promise<void> {
    this.users.push(
      new User({
        ...user,
      }),
    );
  }
}
