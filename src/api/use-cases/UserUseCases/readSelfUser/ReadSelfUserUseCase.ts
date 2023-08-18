import { User } from "../../../entities/user";
import { IUserRepository } from "../../../repositories/IUserRepository";

export class ReadSelfUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(userId: string): Promise<Omit<User, "password">> {
    const user = await this.userRepository.find_by({
      key: "id",
      value: userId,
    });

    if (!user) {
      throw new Error("Usuário não encontrado.:404");
    }

    const { password: _, ...returnedUser } = user;

    return returnedUser;
  }
}
