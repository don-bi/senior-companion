"use server"

import { mailOptions, transporter } from "@/config/nodemailer";
import { contactSchema } from "@/schemas";
import { z } from "zod";

export const contactAction = async (formData: z.infer<typeof contactSchema>) => {
    const validatedData = contactSchema.safeParse(formData);
    if (!validatedData.success) {
        return { success: false, message: 'Form was not successful', formData };
    }
    const { firstName, lastName, email, subject, message} = validatedData.data;
    if (email && message) {
        try {
            await transporter.sendMail({
                ...mailOptions,
                subject: subject,
                text: `From: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`
            })
            return { success: true, message: 'Form was successful' };
        } catch (error) {
            console.log(error);
            return { success: false, message: 'Form was not successful' };
        }
    }
    return { success: false, message: 'Form was not successful' };
}