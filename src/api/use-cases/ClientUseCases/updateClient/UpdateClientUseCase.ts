import { capitalizeNames } from "../../../functions/capitalizeName";
import { IClientRepository } from "../../../repositories/IClientRepository";
import { IUpdateClientDTO, IUpdateProps } from "./UpdateClientDTO";

export class UpdateClientUseCase {
  constructor(private clientRepository: IClientRepository) {}

  async execute(props: IUpdateClientDTO): Promise<void> {
    let dataToUpdate: IUpdateProps = {};

    const actualClient = await this.clientRepository.find_by({
      key: "id",
      value: props.clientId,
    });

    if (!actualClient) {
      throw new Error("User not found.:404");
    }

    if (props.data.email) {
      await this.clientRepository.find_other({
        clientId: props.clientId,
        key: "email",
        value: props.data.email,
      });
    }

    if (props.data.cpf) {
      await this.clientRepository.find_other({
        clientId: props.clientId,
        key: "cpf",
        value: props.data.cpf,
      });
    }

    dataToUpdate = { ...props.data };

    if (dataToUpdate.name) {
      dataToUpdate.name = capitalizeNames(dataToUpdate.name);
    }

    await this.clientRepository.update({
      id: actualClient.id,
      dataToUpdate,
    });
  }
}
