import { IBcrypt } from "../IBcryptPassword";
import bcrypt from "bcrypt";

export class Bcrypt implements IBcrypt {
  async hash(password: string): Promise<string> {
    const hashPass = await bcrypt.hash(password, 10);
    return hashPass;
  }

  async compare(passwordToCheck: string, hashValue: string): Promise<boolean> {
    const isValid = await bcrypt.compare(passwordToCheck, hashValue);

    return isValid;
  }
}
