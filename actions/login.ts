"use server"

import z from "zod";
import { AuthError } from "next-auth";

import { loginSchema } from "@/schemas";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const loginAction = async (formData: z.infer<typeof loginSchema>) => {
    const validatedData = loginSchema.safeParse(formData);

    if (!validatedData.success) {
        return { error: 'Form was not successful', formData };
    }

    const { email, password } = validatedData.data;

    try {
        await signIn('credentials', {
            email,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT,
        })
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin": {
                    return { error: 'Invalid credentials', formData };
                }
                default: {
                    return { error: 'An error occurred', formData };
                }
            }
        }
        throw error;
    }

    return { success: 'User created successfully' };
}