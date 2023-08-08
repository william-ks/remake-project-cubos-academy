export interface IUserRequest {
    id: string,
    name?: string
}

declare global {
    namespace Express {
        export interface Request {
            user: Partial<IUserRequest>;
        }
    }
}