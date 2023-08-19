import { beforeEach, describe, expect, test } from "vitest";
import { InMemoryUsersRepository } from "../../../../../tests/repositories/inMemoryUsersRepository";
import { Bcrypt } from "../../../providers/implementations/BcryptPassword";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";
import { JwtTokens } from "../../../providers/implementations/JwtTokens";
import { User } from "../../../entities/user";

describe("test", () => {
  const userRepository = new InMemoryUsersRepository();
  const bcrypt = new Bcrypt();
  const jwt = new JwtTokens();
  const authenticateUserUseCase = new AuthenticateUserUseCase(
    userRepository,
    bcrypt,
    jwt,
  );

  const user = {
    name: "John Doe",
    email: "john@gmail.com",
    password: "teste123",
  };

  beforeEach(async () => {
    await userRepository.save(
      new User({ ...user, password: await bcrypt.hash(user.password) }),
    );
  });

  test("wrong Password", async () => {
    try {
      await authenticateUserUseCase.execute({
        email: user.email,
        password: "password",
      });
    } catch (e) {
      expect(e.message).toBe("Incorrect e-mail or password.:400");
    }
  });

  test("correct Password", async () => {
    const auth = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(auth).toHaveProperty("token");
  });
});
