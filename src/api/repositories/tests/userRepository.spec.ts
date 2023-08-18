import { describe, expect, test } from "vitest";
import { User } from "../../entities/user";
import { InMemoryUsersRepository } from "./../../../../tests/repositories/inMemoryUsersRepository";

describe("create user", async () => {
  const userRepository = new InMemoryUsersRepository();

  const user = {
    name: "John Doe",
    email: "john@gmail.com",
    password: "teste123",
  };

  let userId;

  test("save", async () => {
    const response = await userRepository.save(
      new User({
        ...user,
      }),
    );

    expect(response).toBeUndefined();
  });

  test("find_by_email", async () => {
    const response = await userRepository.findByEmail(user.email);
    expect(response).toHaveProperty("name", user.name);

    if (response) {
      userId = response?.id as string;
    }
  });

  test("find_by_id", async () => {
    const response = await userRepository.findById(userId);
    expect(response).toHaveProperty("name", user.name);
  });
});
