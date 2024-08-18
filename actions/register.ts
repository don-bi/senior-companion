"use server"

import z from "zod";
import bcrypt from "bcryptjs";

import { getUserByEmail } from "@/data/user";
import { registerSchema } from "@/schemas";
import { db } from "@/lib/db";

export const registerAction = async (formData: z.infer<typeof registerSchema>) => {
    const validatedData = registerSchema.safeParse(formData);

    if (!validatedData.success) {
        return { error: 'Form was not successful', formData };
    }

    const { email, name, password } = validatedData.data;

    const user = await getUserByEmail(email);
    if (user) {
        return { error: 'User already exists' };
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await db.user.create({
        data: {
            email,
            name,
            password: hashedPassword,
        }
    })

    return { success: 'User created successfully' };
}