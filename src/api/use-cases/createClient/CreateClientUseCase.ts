import { IUserRepository } from "../../repositories/IUserRepository";
import { PrismaUserRepository } from "./../../repositories/implementations/PrismaUserRepository";
import { ICreateClientDTO } from "./CreateClientDTO";

export class CreateClientUseCase {
  constructor(private readonly prismaUserRepository: IUserRepository) {}

  async execute(data: ICreateClientDTO): Promise<void> {
    // your code here
  }
}
