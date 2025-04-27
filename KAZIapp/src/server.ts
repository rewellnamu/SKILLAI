// filepath: c:\Users\rewell\OneDrive\Desktop\SKILLAI\server.ts
import { Request, Response } from 'express';

export const reqHandler = (req: Request, res: Response) => {
    res.send('Request handled successfully!');
};