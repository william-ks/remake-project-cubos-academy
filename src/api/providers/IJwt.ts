import { User } from "../entities/user";

export interface data {
  userId: string;
  expiresIn: string;
}

export interface IJwt {
  sign(data: data): string;
  verify(token: string): Object | Error;
}
