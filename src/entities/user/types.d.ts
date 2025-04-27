import { User } from 'next-auth';
import { AdapterUser } from 'next-auth/adapters';

export type TUser = User | AdapterUser;
