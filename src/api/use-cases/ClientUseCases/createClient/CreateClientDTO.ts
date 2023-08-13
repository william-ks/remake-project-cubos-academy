import { IClientAddress } from "../../../entities/client";

export interface ICreateClientDTO {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  address?: IClientAddress;
}
