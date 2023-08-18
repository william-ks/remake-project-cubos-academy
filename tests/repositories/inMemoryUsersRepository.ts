import { User } from "../../src/api/entities/user";
import {
  IFindByParameters,
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

  async update(props: IUpdateUserRepoDTO): Promise<void> {
    const userIndex = this.users.find((el) => el.id === props.id);
    this.users;
  }

  async save(user: User): Promise<void> {
    this.users.push(
      new User({
        ...user,
      }),
    );
  }
}
