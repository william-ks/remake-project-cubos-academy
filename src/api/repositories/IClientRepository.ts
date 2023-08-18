import { Client } from "../entities/client";
import { IUpdateProps } from "../use-cases/ClientUseCases/updateClient/UpdateClientDTO";

export interface IFindByParameters {
  key: "id" | "email" | "cpf";
  value: string;
}
export interface IFindOtherParameters {
  clientId: string;
  key: "email" | "cpf";
  value: string;
}

export interface IClientRepository {
  find_by(props: IFindByParameters): Promise<Client>;
  find_all(): Promise<Client[]>;
  find_other(props: IFindOtherParameters): Promise<void>;
  save(data: Client): Promise<void>;
  update(props: { id: string; dataToUpdate: IUpdateProps }): Promise<void>;
}
