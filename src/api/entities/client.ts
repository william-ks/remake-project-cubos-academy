import { uuid } from "uuidv4";

export interface IClientAddress {
  zipCode?: string;
  complement?: string;
  neighborhood?: string;
  city?: string;
  state?: string;
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
