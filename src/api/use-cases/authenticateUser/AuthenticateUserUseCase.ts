import { User } from "../../entities/user";
import { IBcrypt } from "../../providers/IBcryptPassword";
import { IJwt } from "../../providers/IJwt";
import { IUserRepository } from "../../repositories/IUserRepository";
import { AuthenticateUserDTO } from "./AuthenticateUserDTO";

export class AuthenticateUserUseCase {
	constructor(
		private userRepository: IUserRepository,
		private bcrypt: IBcrypt,
		private jwt: IJwt,
	) { }

	async execute(data: AuthenticateUserDTO) {
		const userFound = await this.userRepository.findByEmail(data.email);

		if (!userFound) {
			throw new Error("User not found.:404");
		}

		const isValidPass = await this.bcrypt.compare(data.password, userFound.password);

		if (!isValidPass) {
			throw new Error("Incorrect e-mail or password.:400");
		}

		const acessToken = await this.jwt.sign({
			user: {
				id: userFound.id as string,
				name: userFound.name,
				email: userFound.email,
			},
			expiresIn: '8h'
		});

		const { password: _, ...user } = userFound;

		return {
			user,
			token: acessToken
		}
	}
}