import jwt from "jsonwebtoken";
import { IJwt, data } from "../IJwt";

export class JwtTokens implements IJwt {
  async sign(data: data): Promise<string> {
    const token = jwt.sign(
      { id: data.userId },
      process.env.JWT_PASS || "needValue",
      {
        expiresIn: data.expiresIn,
      },
    );

    return token;
  }

  async verify(token: string): Promise<{ id: string }> {
    const data = jwt.verify(token, process.env.JWT_PASS || "needValue");
    return data as { id: string };
  }
}
