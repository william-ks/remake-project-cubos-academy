import { prisma } from "../../../configs/prisma";
import { User } from "../../entities/user";
import { IUpdateUserRepoDTO, IUserRepository } from "../IUserRepository";

export class PrismaUserRepository implements IUserRepository {
	async findById(id: string | number): Promise<User | void> {
		const user = await prisma.user.findFirst({
			where: {
				id: id as string,
			},
		});

		return user;
	}

	async findByEmail(email: string): Promise<User | void> {
		const user = await prisma.user.findFirst({
			where: {
				email,
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
