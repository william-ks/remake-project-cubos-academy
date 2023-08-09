import { describe, expect, test } from "vitest";
import { InMemoryUsersRepository } from "../../../../tests/repositories/inMemoryUsersRepository";
import { User } from "../../entities/user";
import { Bcrypt } from "../../providers/implementations/BcryptPassword";
import { JwtTokens } from "../../providers/implementations/JwtTokens";
import { CreateUserUseCase } from "../createUser/createUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

describe("AuthenticateUser tests", async () => {
  const user = new User({
    name: "John Doe",
    email: "johndoe@gmail.com",
    password: "teste123",
  });

  const bcrypt = new Bcrypt();
  const jwt = new JwtTokens();
  const inMemoryUsersRepository = new InMemoryUsersRepository();
  const authenticateUser = new AuthenticateUserUseCase(
    inMemoryUsersRepository,
    bcrypt,
    jwt,
  );
  const createUser = new CreateUserUseCase(inMemoryUsersRepository, bcrypt);

  await createUser.execute(user);

  test("authenticate user", async () => {
    const response = await authenticateUser.execute({
      email: user.email,
      password: user.password,
    });
    expect(response).toHaveProperty("token");
  });
});
