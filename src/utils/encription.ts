import * as crypto from 'crypto';

export function addSalt() {
  return crypto.randomBytes(3).toString('base64');
}

export function encript(userPasswrd: string, salt: string): string {
  const excript = crypto
    .pbkdf2Sync(userPasswrd, salt, 10000, 16, 'sha256')
    .toString('base64');
  return excript;
}
