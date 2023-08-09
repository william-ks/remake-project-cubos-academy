/* eslint-disable no-unused-vars */
import { Client } from "../entities/client";

export interface IParameters {
  parameters: "id" | "email" | "cpf";
}

export interface IClientRepository {
  find_by(parameters: IParameters): Promise<Client>;
}
