import GitHub from "next-auth/providers/github";
import { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { loginSchema } from './schemas/index';
import { getUserByEmail } from './data/user';
import bcrypt from 'bcryptjs';


export default { 
    providers: [
        Credentials({
            async authorize(credentials): Promise<any> {
                const validatedData = loginSchema.safeParse(credentials);
                if (validatedData.success) {
                    const { email, password } = validatedData.data;
                    
                    const user = await getUserByEmail(email);
                    if (!user || !user.password) return null;

                    const passwordMatch = await bcrypt.compare(password, user.password);

                    if (passwordMatch) return user;
                    
                    return null;
                }
            }
        })
    ],
    secret: process.env.SECRET, 
} satisfies NextAuthConfig;