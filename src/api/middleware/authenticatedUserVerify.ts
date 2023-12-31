import { NextFunction, Request, Response } from "express";
import { JwtTokens } from "../providers/implementations/JwtTokens";

export const authenticatedUserVerify = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.includes("Bearer")) {
    throw new Error("Invalid token or not authenticated user.:401");
  }

  const token = authorization.split(" ")[1];

  const jwt = new JwtTokens();

  try {
    const userData = await jwt.verify(token);
    req.user = { id: userData.id };

    next();
  } catch (e) {
    throw new Error("Invalid token or not authenticated user.:401");
  }
};
