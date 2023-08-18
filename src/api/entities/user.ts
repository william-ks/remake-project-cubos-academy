import { uuid } from "uuidv4";
import { capitalizeNames } from "../functions/captalizeName";

export class User {
  public readonly id: string | number;

  public name: string;
  public email: string;
  public password: string;

  constructor(props: Omit<User, "id">, id?: string) {
    Object.assign(this, props);

    this.name = capitalizeNames(this.name);

    if (!id) {
      this.id = uuid();
    }
  }
}
