import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
    username: string;
}

const jwtAuth = (req: Request, res: Response, next: NextFunction): void => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
        res.status(401).send('Access Denied');
        return;
    }

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;
        // req.user = verified;
        next();
    } catch (err) {
        res.status(400).send('Invalid Token');
    }
};

export default jwtAuth;