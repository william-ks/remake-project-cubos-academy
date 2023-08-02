export interface IBcrypt {
    hash(password: string): Promise<string>;
    compare(passwordToCheck: string, hashValue: string): Promise<boolean>;
}