import { prisma } from "../../../configs/prisma";
import { User } from "../../entities/user";
import {
  IFindByParameters,
  IFindOtherParameters,
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

  async find_other(props: IFindOtherParameters): Promise<void> {
    const { userId, email } = props;

    const found = await prisma.user.findFirst({
      where: {
        email: email,
        NOT: {
          id: userId,
        },
      },
    });

    if (found) {
      throw new Error("Already exists a user with this E-mail:400");
    }
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
