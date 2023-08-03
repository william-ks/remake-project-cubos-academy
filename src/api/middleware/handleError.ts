import { NextFunction, Request, Response } from "express";

export const handleError = async (error: Error, req: Request, res: Response, NextFunction: NextFunction) => {
    const message: string[] = error.message.split(':');

    return res.status(+message[1] || 400).json({
        status: 'error',
        message: message[0] || error.message
    })
}