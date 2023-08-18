import { Client } from "../../../entities/client";
import { IClientRepository } from "../../../repositories/IClientRepository";
import { IReadOneClientDTO } from "./ReadOneClientDTO";

export class ReadOneClientUseCase {
  constructor(private clientRepository: IClientRepository) {}

  async execute(props: IReadOneClientDTO): Promise<Client> {
    const client = await this.clientRepository.find_by({
      key: "id",
      value: props.id,
    });

    if (!client) {
      throw new Error("User not Found!.");
    }

    return client;
  }
}
