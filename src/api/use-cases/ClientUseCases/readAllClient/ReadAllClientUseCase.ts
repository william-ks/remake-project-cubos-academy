import { IClientRepository } from "./../../../repositories/IClientRepository";
import { Client } from "../../../entities/client";

export class ReadAllClientUseCase {
  constructor(private clientRepository: IClientRepository) {}

  async execute(): Promise<Client[]> {
    const clientList = await this.clientRepository.find_all();

    return clientList;
  }
}
