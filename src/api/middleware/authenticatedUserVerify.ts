import { NextFunction, Request, Response } from "express";
import { JwtTokens } from "../providers/implementations/JwtTokens";
import { IUserRequest } from "../../@types/express";

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
		const userData = jwt.verify(token);

		req.user = userData;

		next();
	} catch (e) {
		throw new Error("Invalid token or not authenticated user.:401");
	}
};
