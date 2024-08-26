"use server"

import { mailOptions, transporter } from "@/config/nodemailer";
import { volunteerSchema } from "@/schemas";
import { z } from "zod";

export const volunteerAction = async (formData: z.infer<typeof volunteerSchema>) => {
    const validatedData = volunteerSchema.safeParse(formData);
    if (!validatedData.success) {
        return { success: false, message: 'Form was not successful', formData };
    }
    const { firstName, lastName, email, phone, address, city, state, birthdate, referral, comments} = validatedData.data;
    try {
        await transporter.sendMail({
            ...mailOptions,
            subject: "Volunteer Form",
            text: `From: ${firstName} ${lastName}\nEmail: ${email}\nAddress: ${address}, ${city}, ${state}\nPhone: ${phone}\nBirthdate: ${birthdate}\n\nHow they heard about us: ${referral}\nComments: ${comments}`
        })
        return { success: true, message: 'Form was successful' };
    } catch (error) {
        console.log(error);
        return { success: false, message: 'Form was not successful' };
    }
    return { success: false, message: 'Form was not successful' };
}