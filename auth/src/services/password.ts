import dotenv from 'dotenv';
import { ServerError } from '../errors';
import bcrypt from 'bcrypt';
dotenv.config();

export class Password {
  static toHash(password: string): string {
    if (!process.env.PASSWORD_SALT_ROUND) {
      throw new ServerError('server unable to create user');
    }
    const hashedPass = bcrypt.hashSync(
      password,
      process.env.PASSWORD_SALT_ROUND
    );
    return hashedPass;
  }

  static passwordIsCorrect(storedPassword: string, suppliedPassword: string) {
    return bcrypt.compareSync(suppliedPassword, storedPassword);
  }
}
