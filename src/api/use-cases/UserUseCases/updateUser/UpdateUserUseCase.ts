import { User } from "../../../entities/user";
import { capitalizeNames } from "../../../functions/capitalizeName";
import { IUserRepository } from "../../../repositories/IUserRepository";
import { IUpdateUserDTO } from "./UpdateUserDTO";

export class UpdateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(data: IUpdateUserDTO, user: Partial<User>): Promise<void> {
    const dataToUpdate: IUpdateUserDTO = {};

    const actualUser = await this.userRepository.find_by({
      key: "id",
      value: user.id as string,
    });

    if (!actualUser) {
      throw new Error("Invalid Token.:401");
    }

    if (data.name) {
      dataToUpdate.name = capitalizeNames(data.name);
    }

    if (data.email) {
      if (actualUser.email !== data.email) {
        const alreadyExistsEmail = await this.userRepository.find_by({
          key: "email",
          value: data.email,
        });

        if (alreadyExistsEmail) {
          if (alreadyExistsEmail.id !== actualUser.id) {
            throw new Error("This e-mail already exist in our database.:400");
          }
        } else {
          dataToUpdate.email = data.email;
        }
      }
    }

    this.userRepository.update({
      dataToUpdate,
      id: actualUser.id as string,
    });
  }
}
