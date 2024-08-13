"use server"

import { mailOptions, transporter } from "@/config/nodemailer";

type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    message: string;
}

export const contactAction = async (formData: FormData) => {
    if (formData && formData.email && formData.message) {
        try {
            await transporter.sendMail({
                ...mailOptions,
                subject: formData.subject,
                text: `From: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\n\n${formData.message}`
            })
            return { success: true, message: 'Form was successful', formData };
        } catch (error) {
            console.log(error);
            return { success: false, message: 'Form was not successful', formData };
        }
    }
    return { success: false, message: 'Form was not successful', formData };
}