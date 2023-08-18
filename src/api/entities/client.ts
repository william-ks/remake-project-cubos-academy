import { uuid } from "uuidv4";

export class Client {
  public readonly id?: string;
  public name: string;
  public email: string;
  public cpf: string;
  public phone: string;
  public zipCode?: string;
  public complement?: string;
  public neighborhood?: string;
  public city?: string;
  public state?: string;

  constructor(props: Omit<Client, "id">, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}
