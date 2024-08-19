import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { loginSchema } from './schemas/index';
import { getUserByEmail, getUserById } from './data/user';
import bcrypt from 'bcryptjs';


export default {
    providers: [
        Google({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
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
    secret: process.env.AUTH_SECRET, 
} satisfies NextAuthConfig;