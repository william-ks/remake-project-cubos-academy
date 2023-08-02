import { Request, Response, NextFunction } from "express";

export const bodyValidation =
    (zodSchema: any) =>
        async (req: Request, res: Response, next: NextFunction) => {
            try {
                await zodSchema.parse(req.body);
                next();
            } catch (e: any) {
                return res.status(400).json({ message: e.issues[0].message });
            }
        };
