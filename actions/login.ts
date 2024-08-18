"use server"

import z from "zod";
import bcrypt from "bcryptjs";

import { getUserByEmail } from "@/data/user";
import { loginSchema } from "@/schemas";
import { db } from "@/lib/db";

export const loginAction = async (formData: z.infer<typeof loginSchema>) => {
    const validatedData = loginSchema.safeParse(formData);

    if (!validatedData.success) {
        return { error: 'Form was not successful', formData };
    }

    const { email, password } = validatedData.data;

    const user = await getUserByEmail(email);
    
    //TODO

    return { success: 'User created successfully' };
}