import { IClientRepository } from "../../../repositories/IClientRepository";
import { ICreateClientDTO } from "./CreateClientDTO";

export class CreateClientUseCase {
  constructor(private clientRepository: IClientRepository) {}

  async execute(data: ICreateClientDTO): Promise<void> {
    const clientEmailAlreadyExists = await this.clientRepository.find_by({
      type: "email",
      value: data.email,
    });

    if (clientEmailAlreadyExists) {
      throw new Error("E-mail já cadastrado.:400");
    }

    const clientCpfAlreadyExists = await this.clientRepository.find_by({
      type: "cpf",
      value: data.cpf,
    });

    if (clientCpfAlreadyExists) {
      throw new Error("Cpf já cadastrado.:400");
    }

    await this.clientRepository.save(data);
  }
}
