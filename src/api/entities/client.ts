import { uuid } from "uuidv4";

export interface IClientAddress {
  zipCode?: string;
  publicPlace?: string;
  complement?: string;
  neighborhood?: string;
  city?: string;
  status?: string;
}

export class Client {
  public readonly id?: string;
  public name: string;
  public email: string;
  public cpf: string;
  public phone: string;
  public address?: IClientAddress;

  constructor(props: Omit<Client, "id">, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}
