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

const phoneRegex = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/);

export const volunteerSchema = z.object({
    firstName: z.string().min(1, "First Name is required").max(50),
    lastName: z.string().min(1, "Last Name is required").max(50),
    email: z.string().email("Valid email is required."),
    phone: z.string().min(1, "Phone number is required").regex(phoneRegex, "Valid phone number is required."),
    address: z.string().min(1, "Address is required").max(100),
    city: z.string().min(1, "City is required").max(50),
    state: z.string().min(1, "State is required"),
    birthdate: z.string().min(1, "Birthdate is required"),
    referral: z.string().max(200),
    comments: z.string().max(200),
})