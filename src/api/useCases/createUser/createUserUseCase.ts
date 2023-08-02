import { User } from "../../entities/user";
import { IBcrypt } from "../../providers/IBcryptPassword";
import { IUserRepository } from "../../repositories/IUserRepository";
import { ICreateUserRequestDTO } from "./createUserDTO";

export class CreateUserUseCase {
    constructor(
        private userRepository: IUserRepository,
        private bcrypt: IBcrypt
    ) { }

    async execute(data: ICreateUserRequestDTO): Promise<void> {
        const userAlreadyExists = await this.userRepository.findByEmail(data.email);

        if (userAlreadyExists) throw new Error('This user already exists in our database.');

        const hashPass = await this.bcrypt.hash(data.password);

        const user = new User({
            name: data.name,
            email: data.email,
            password: hashPass
        })

        await this.userRepository.save(user);
    }
}