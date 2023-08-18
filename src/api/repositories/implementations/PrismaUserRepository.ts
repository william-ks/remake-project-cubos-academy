import { prisma } from "../../../configs/prisma";
import { User } from "../../entities/user";
import {
  IFindByParameters,
  IUpdateUserRepoDTO,
  IUserRepository,
} from "../IUserRepository";

export class PrismaUserRepository implements IUserRepository {
  async find_by({ key, value }: IFindByParameters): Promise<void | User> {
    const user = await prisma.user.findFirst({
      where: {
        [key]: value,
      },
    });

    return user;
  }

  async save(user: User): Promise<void> {
    await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
      },
    });
  }

  async update(props: IUpdateUserRepoDTO): Promise<void> {
    await prisma.user.update({
      where: {
        id: props.id as string,
      },
      data: props.dataToUpdate,
    });
  }
}
