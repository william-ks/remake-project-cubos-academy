import jwt from "jsonwebtoken";
import { IJwt, data } from "../IJwt";

export class JwtTokens implements IJwt {
  sign(data: data): string {
    const token = jwt.sign(
      { ...data.user },
      process.env.JWT_PASS || "needValue",
      {
        expiresIn: data.expiresIn,
      },
    );

    return token;
  }

  verify(token: string): Object | Error {
    const data = jwt.verify(token, process.env.JWT_PASS || "needValue");

    return data;
  }
}
