import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';
import { addSalt, encript } from 'src/utils/encription';

@Injectable()
export class HashPasswordMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    let userPassword = req.body['passworld'];
    if (userPassword) {
      const SALT = addSalt();
      userPassword = encript(userPassword, SALT);
      req.body['passworld'] = userPassword;
      req.body['salt'] = SALT;
    }
    console.log('password :>> ', req.body['passworld']);
    next();
  }
}
