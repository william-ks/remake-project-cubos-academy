import { User } from "../entities/user";

export interface IUpdateUserRepoDTO {
  dataToUpdate: Omit<Partial<User>, "id">;
  id: string;
}

export interface IUserRepository {
  findById(id: string | number): Promise<User | void>;
  findByEmail(email: string): Promise<User | void>;
  save(user: User): Promise<void>;
  update(props: IUpdateUserRepoDTO): Promise<void>;
}
