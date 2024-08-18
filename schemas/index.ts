import z from "zod";

export const contactSchema = z.object({
    firstName: z.string().max(50),
    lastName: z.string().max(50),
    email: z.string().email("Valid email is required."),
    subject: z.string().max(100),
    message: z.string().min(1, "Message is required.").max(500, "Message too long"),
})

export const registerSchema = z.object({
    email: z.string().email("Valid email is required."),
    name: z.string().max(50),
    password: z.string()
    .min(8, "Password must be at least 8 characters long.")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter.")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter.")
    .regex(/[0-9]/, "Password must contain at least one number.")
})

export const loginSchema = z.object({
    email: z.string().email("Valid email is required."),
    password: z.string().min(1, "Password is required.")
})