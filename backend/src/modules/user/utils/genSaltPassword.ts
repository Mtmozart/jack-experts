import { genSalt, hash } from 'bcrypt';

export default async function genSaltPassword(
  password: string,
): Promise<string> {
  const salt = await genSalt();
  return await hash(password, salt);
}
