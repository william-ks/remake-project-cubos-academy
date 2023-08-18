import { Client } from "../../../entities/client";
import { capitalizeNames } from "../../../functions/captalizeName";
import { IClientRepository } from "../../../repositories/IClientRepository";
import { ICreateClientDTO } from "./CreateClientDTO";

export class CreateClientUseCase {
  constructor(private clientRepository: IClientRepository) {}

  async execute(data: ICreateClientDTO): Promise<void> {
    const clientEmailAlreadyExists = await this.clientRepository.find_by({
      key: "email",
      value: data.email,
    });

    if (clientEmailAlreadyExists) {
      throw new Error("Already exists a client with this CPF/E-mail:400");
    }

    const clientCpfAlreadyExists = await this.clientRepository.find_by({
      key: "cpf",
      value: data.cpf,
    });

    if (clientCpfAlreadyExists) {
      throw new Error("Already exists a client with this CPF/E-mail:400");
    }

    const client = new Client({
      ...data,
    });

    await this.clientRepository.save(client);
  }
}
