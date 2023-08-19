import { prisma } from "../../../configs/prisma";
import { Client } from "../../entities/client";
import {
  IClientRepository,
  IFindByParameters,
  IFindOtherParameters,
} from "../IClientRepository";

export class PrismaClientRepository implements IClientRepository {
  async find_by({ key, value }: IFindByParameters): Promise<Client> {
    const client = prisma.client.findFirst({
      where: {
        [key]: value,
      },
    });
    return client;
  }

  async save(data: Client): Promise<void> {
    await prisma.client.create({
      data: {
        name: data.name,
        email: data.email,
        cpf: data.cpf,
        phone: data.phone,
        zipCode: data.zipCode || null,
        complement: data.complement || null,
        neighborhood: data.neighborhood || null,
        city: data.city || null,
        state: data.state || null,
      },
    });
  }

  async find_all(): Promise<Client[]> {
    const clients = await prisma.client.findMany({
      orderBy: {
        name: "asc",
      },
    });
    return clients;
  }

  async find_other(props: IFindOtherParameters): Promise<void> {
    const { key, value, clientId } = props;
    const found = await prisma.client.findFirst({
      where: {
        [key]: value,
        NOT: {
          id: clientId,
        },
      },
    });

    if (found) {
      throw new Error("Already exists a client with this CPF/E-mail:400");
    }
  }

  async update(props: {
    id: string;
    dataToUpdate: Omit<Partial<Client>, "id">;
  }): Promise<void> {
    const { id, dataToUpdate } = props;

    await prisma.client.update({
      where: {
        id,
      },
      data: {
        ...dataToUpdate,
      },
    });
  }
}
