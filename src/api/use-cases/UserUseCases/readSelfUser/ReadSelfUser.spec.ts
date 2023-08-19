import { beforeEach, describe, expect, test } from "vitest";
import { InMemoryUsersRepository } from "../../../../../tests/repositories/inMemoryUsersRepository";
import { User } from "../../../entities/user";
import { ReadSelfUserUseCase } from "./ReadSelfUserUseCase";

describe("test", () => {
  const userRepository = new InMemoryUsersRepository();
  const readSelfUserUseCase = new ReadSelfUserUseCase(userRepository);

  const userExample1 = {
    name: "John Doe",
    email: "john@gmail.com",
    password: "teste123",
  };

  const userExample2 = {
    name: "John Doe",
    email: "john@gmail.com",
    password: "teste123",
  };

  let userId: string;

  beforeEach(async () => {
    await userRepository.save(new User({ ...userExample1 }));

    await userRepository.save(new User({ ...userExample2 }));

    userId = userRepository.users[0].id as string;
  });

  test("read self test", async () => {
    const user = await readSelfUserUseCase.execute(userId);

    expect(user).toHaveProperty("name", userExample1.name);
  });

  test("read other user", async () => {
    const user = await readSelfUserUseCase.execute(
      userRepository.users[1].id as string,
    );

    expect(user).toHaveProperty("name", userExample2.name);
  });
});
