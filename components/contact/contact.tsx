"use client"

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import z from 'zod';
import Spinner from '../spinner';
import 'ldrs/tailspin';
import { contactAction } from '@/actions/contactAction';
import styles from './contact.module.css';
import { useEffect, useRef, useState } from 'react';
import { error } from 'console';
import { contactSchema } from '@/schemas';

type contactFields = z.infer<typeof contactSchema>

export default function Contact() {
    const successElement = useRef<HTMLDivElement>(null);
    const errorElement = useRef<HTMLDivElement>(null);
    const submitButton = useRef<HTMLButtonElement>(null);

    const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm<contactFields>({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            subject: "",
            message: ""
        },
        resolver: zodResolver(contactSchema),
    });

    const onSubmit: SubmitHandler<contactFields> = async (data) => {
        try {
            const response = await contactAction(data);
            if (response.success) {
                successElement.current?.classList.add(styles.show);
                if (submitButton.current) submitButton.current.disabled = true;
                setTimeout(() => {
                    successElement.current?.classList.remove(styles.show);
                    if (submitButton.current) submitButton.current.disabled = false;
                }, 4000);
            } else {
                errorElement.current?.classList.add(styles.show);
                if (submitButton.current) submitButton.current.disabled = true
                setTimeout(() => {
                    errorElement.current?.classList.remove(styles.show);
                    if (submitButton.current) submitButton.current.disabled = false;
                }, 5000);
            }
        } catch (error) {
        }
    }

    return (
        <div className={`${styles.contact} relative`} id='contact'>
            <h1 className={`${styles.textEbony} ${styles.heading} text-center`}>CONTACT US</h1>
            <div className={`${styles.textEbony} ${styles.success}`} ref={successElement}>Message sent successfully!</div>
            <div className={`${styles.textEbony} ${styles.error}`} ref={errorElement}>Message not sent. Please try again.</div>
            <form onSubmit={handleSubmit(onSubmit)} method='POST' className='flex flex-col gap-2 mt-6'>
                <div className='flex gap-4'>
                <div className='flex flex-col flex-auto'>
                        <label htmlFor="firstName" className={styles.textEbony}>First Name</label>
                        <input id="firstName" type="text" {...register('firstName')} className={styles.input}/>
                        <div>&nbsp;</div>
                    </div>
                    <div className='flex flex-col flex-auto'>
                        <label htmlFor="lastName" className={styles.textEbony}>Last Name</label>
                        <input id="lastName" type="text" {...register('lastName')} className={styles.input}/>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <div className='flex flex-col flex-auto'>
                        <label htmlFor="email" className={`w-fit relative pr-5 ${errors.email ? "text-red-500" : ""} ${styles.textEbony}`}>Email <span className='text-red-500'>*</span></label>
                        <input id="email" type="text" {...register('email')} className={styles.input}/>
                        <div className={`${styles.textEbony} ${styles.errorColor}`}>{errors.email && errors.email.message}&nbsp;</div>
                    </div>
                    <div className='flex flex-col flex-auto'>
                        <label htmlFor="subject" className={styles.textEbony}>Subject</label>
                        <input id="subject" type="text" {...register('subject')} className={styles.input}/>
                    </div>
                </div>
                <div className='flex gap-4 items-center'>
                <div className='flex flex-col flex-auto'>
                        <label htmlFor="message" className={`w-fit relative pr-5 ${errors.email ? "text-red-500" : ""} ${styles.textEbony}`}>Message <span className='text-red-500'>*</span></label>
                        <textarea id="message" {...register('message')} className={`resize-none ${styles.input}`} rows={3}></textarea>
                        <div className={`${styles.textEbony} ${styles.errorColor}`}>{errors.message && errors.message.message}&nbsp;</div>
                    </div>
                    <button type='submit' className={styles.submit} ref={submitButton}>
                        {isSubmitting ? 
                        <Spinner /> : 
                        "Submit"}
                        </button>
                </div>
            </form>
            <div className='flex justify-between'>
                <div className='text-xs lg:text-base font-semibold flex-auto'>Wish to contact us alternatively?</div>
                <div className='text-xs lg:text-base font-semibold break-all flex-auto'>Phone: 917-678-7599</div>
                <div className='text-xs lg:text-base font-semibold break-all flex-auto'>Email: craigchen1219@gmail.com</div>
            </div>
        </div>
    )
}