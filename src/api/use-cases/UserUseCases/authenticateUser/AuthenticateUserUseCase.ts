import { User } from "../../../entities/user";
import { IBcrypt } from "../../../providers/IBcryptPassword";
import { IJwt } from "../../../providers/IJwt";
import { IUserRepository } from "../../../repositories/IUserRepository";
import { AuthenticateUserDTO } from "./AuthenticateUserDTO";

export class AuthenticateUserUseCase {
  constructor(
    private userRepository: IUserRepository,
    private bcrypt: IBcrypt,
    private jwt: IJwt,
  ) {}

  async execute(data: AuthenticateUserDTO) {
    const userFound = await this.userRepository.find_by({
      key: "email",
      value: data.email,
    });

    if (!userFound) {
      throw new Error("User not found.:404");
    }

    const isValidPass = await this.bcrypt.compare(
      data.password,
      userFound.password,
    );

    if (!isValidPass) {
      throw new Error("Incorrect e-mail or password.:400");
    }

    const accessToken = await this.jwt.sign({
      userId: userFound.id as string,
      expiresIn: "8h",
    });

    const { password: _, ...user } = userFound;

    return {
      user,
      token: accessToken,
    };
  }
}
