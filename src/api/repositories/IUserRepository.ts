import { User } from "../entities/user";

export interface IUpdateUserRepoDTO {
  dataToUpdate: Omit<Partial<User>, "id">;
  id: string;
}

export interface IFindByParameters {
  key: "id" | "email";
  value: string;
}

export interface IFindOtherParameters {
  userId: string;
  email: string;
}

export interface IUserRepository {
  find_by(props: IFindByParameters): Promise<User | void>;
  find_other(props: IFindOtherParameters): Promise<void>;
  save(user: User): Promise<void>;
  update(props: IUpdateUserRepoDTO): Promise<void>;
}
