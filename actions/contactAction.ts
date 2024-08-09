"use server"

import { mailOptions, transporter } from "@/config/nodemailer";

export const contactAction = async (data: any) => {
    if (data.email && data.message) {
        try {
            await transporter.sendMail({
                ...mailOptions,
                subject: data.subject,
                text: `From: ${data.firstName} ${data.lastName}
                Email: \n${data.email}
                \n\n${data.message}`
            })
            return { success: true, message: 'Form was successful', data };
        } catch (error) {
            console.log(error);
            return { success: false, message: 'Form was not successful', data };
        }
    }
    return { success: false, message: 'Form was not successful', data };
}