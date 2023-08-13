/* eslint-disable no-unused-vars */
import { Client } from "../entities/client";

export interface IParameters {
  type: "id" | "email" | "cpf";
  value: string;
}

export interface IClientRepository {
  find_by(parameters: IParameters): Promise<Client>;
  save(data: Client): Promise<void>;
}
