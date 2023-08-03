import jwt from 'jsonwebtoken';
import { IJwt, data } from '../IJwt';

export class JwtTokens implements IJwt {
    sign(data: data): string {
        const token = jwt.sign({ ...data.user }, process.env.JWT_PASS || 'senha', {
            expiresIn: data.expiresIn
        })

        return token
    }
}