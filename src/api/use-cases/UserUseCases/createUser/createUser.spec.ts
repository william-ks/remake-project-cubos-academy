import { describe, test, expect } from "vitest";
import { InMemoryUsersRepository } from "../../../../../tests/repositories/inMemoryUsersRepository";
import { Bcrypt } from "../../../providers/implementations/BcryptPassword";
import { CreateUserUseCase } from "./createUserUseCase";

describe("test", () => {
  const userRepository = new InMemoryUsersRepository();
  const bcrypt = new Bcrypt();
  const createUserUseCase = new CreateUserUseCase(userRepository, bcrypt);

  const userExample = {
    name: "will",
    email: "john@gmail.com",
    password: "teste123",
  };

  test("create user ", async () => {
    await createUserUseCase.execute(userExample);

    expect(userRepository.users[0]).toHaveProperty("name", "will");
  });

  test("try repeated User", async () => {
    try {
      await createUserUseCase.execute(userExample);
    } catch (e) {
      expect(e.message).toBe("This user already exists in our database.:400");
    }
  });
});
