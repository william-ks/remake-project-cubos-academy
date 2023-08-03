import { NextFunction, Request, Response } from "express";
import { JwtTokens } from "../providers/implementations/JwtTokens";

export const authenticatedUserVerify = async (req: Request, res: Response, NextFunction: NextFunction) => {
    const { authorization } = req.headers;

    if (!authorization || !authorization.includes('Bearer')) {
        throw new Error('Invalid token or not authenticated user.:401');
    }

    const token = authorization.split(' ')[1];

    const jwt = new JwtTokens();

    try {
        const userData = jwt.verify(token);

        req.user = userData;
        NextFunction();
    } catch (e) {
        throw new Error('Invalid token or not authenticated user.:401')
    }
}