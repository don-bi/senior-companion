import nodemailer from 'nodemailer';

const sender = process.env.EMAIL_SENDER;
const receiver = process.env.EMAIL_RECEIVER;
const pass = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: sender,
        pass, 
    },
})

export const mailOptions = {
    from: sender,
    to: receiver,
    
}