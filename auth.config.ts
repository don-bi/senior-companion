import GitHub from "next-auth/providers/github";
import { NextAuthConfig } from "next-auth";

export default { 
    providers: [GitHub],
    secret: process.env.SECRET, 
} satisfies NextAuthConfig;