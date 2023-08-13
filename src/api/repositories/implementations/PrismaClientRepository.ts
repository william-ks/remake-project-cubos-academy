import { prisma } from "../../../configs/prisma";
import { Client } from "../../entities/client";
import { IClientRepository, IParameters } from "../IClientRepository";

export class PrismaClientRepository implements IClientRepository {
  async find_by(parameters: IParameters): Promise<Client> {
    let client;
    switch (parameters.type) {
      case "email":
        client = prisma.client.findFirst({
          where: {
            email: parameters.value,
          },
        });
        break;
      case "id":
        client = prisma.client.findFirst({
          where: {
            id: parameters.value,
          },
        });
        break;
      case "cpf":
        client = prisma.client.findFirst({
          where: {
            cpf: parameters.value,
          },
        });
        break;
    }

    return client;
  }

  async save(data: Client): Promise<void> {
    await prisma.client.create({
      data: {
        name: data.name,
        email: data.email,
        cpf: data.cpf,
        phone: data.phone,
        zipCode: data.address.zipCode || null,
        complement: data.address.complement || null,
        neighborhood: data.address.neighborhood || null,
        city: data.address.city || null,
        state: data.address.state || null,
      },
    });
  }
}
