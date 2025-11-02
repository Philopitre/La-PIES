import { ulid } from 'ulid';
export const newId = () => ulid();
export const toHex = (buf: Buffer) => buf.toString('hex');
