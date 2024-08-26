"use client"

import { volunteerSchema } from "@/schemas";
import { useForm } from "react-hook-form";
import { z } from "zod";
import styles from "./volunteer.module.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef } from "react";
import { volunteerAction } from "@/actions/volunteerAction";

export default function VolunteerForm() {
    const successElement = useRef<HTMLDivElement>(null);
    const errorElement = useRef<HTMLDivElement>(null);
    const submitButton = useRef<HTMLButtonElement>(null);

    const {register, handleSubmit, formState: {
        errors,
        isSubmitting
    }} = useForm<z.infer<typeof volunteerSchema>>({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            address: "",
            city: "",
            referral: "",
            comments: ""
        },
        resolver: zodResolver(volunteerSchema),
    });

    const onSubmit = async (formData: z.infer<typeof volunteerSchema>) => {
        try {
            const response = await volunteerAction(formData);
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
        <form className="py-[2rem]"  onSubmit={handleSubmit(onSubmit)}>
            <h1 className="ml-[4%] text-5xl font-semibold tracking-wide mb-10">Register to Volunteer</h1>
            <div className="flex gap-[4%] flex-wrap justify-center">
                <div className={styles.container}>
                    <label htmlFor="firstName" className="tracking-wider">First Name <span className='text-red-500'>*</span></label>
                    <input {...register("firstName")} type="text" id="firstName" className={styles.input} placeholder="John"/>
                    <div>{errors.firstName && errors.firstName.message}&nbsp;</div>
                </div>
                <div className={styles.container}>
                    <label htmlFor="lastName" className="tracking-wider">Last Name <span className='text-red-500'>*</span></label>
                    <input {...register("lastName")} type="text" id="lastName" className={styles.input} placeholder="Doe"/>
                    <div>{errors.lastName && errors.lastName.message}&nbsp;</div>
                </div>
                <div className={styles.container}>
                    <label htmlFor="email" className="tracking-wider">Email <span className='text-red-500'>*</span></label>
                    <input {...register("email")} type="text" id="email" className={styles.input} placeholder="example@email.com"/>
                    <div>{errors.email && errors.email.message}&nbsp;</div>
                </div>
                <div className={styles.container}>
                    <label htmlFor="phone" className="tracking-wider">Phone Number <span className='text-red-500'>*</span></label>
                    <input {...register("phone")} type="text" id="phone" className={styles.input} placeholder="999-999-9999"/>
                    <div>{errors.phone && errors.phone.message}&nbsp;</div>
                </div>
                <div className={styles.container}>
                    <label htmlFor="address" className="tracking-wider">Address <span className='text-red-500'>*</span></label>
                    <input {...register("address")} type="text" id="address" className={styles.input}/>
                    <div>{errors.address && errors.address.message}&nbsp;</div>
                </div>
                <div className={styles.container}>
                    <label htmlFor="city" className="tracking-wider">City <span className='text-red-500'>*</span></label>
                    <input {...register("city")} type="text" id="city" className={styles.input}/>
                    <div>{errors.city && errors.city.message}&nbsp;</div>
                </div>
                <div className={styles.container}>
                    <label htmlFor="state" className="tracking-wider">State <span className='text-red-500'>*</span></label>
                    <select {...register("state")} id="state" className={styles.input} required>
                        <option value="NY">New York</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </select>
                </div>
                <div className={styles.container}>
                    <label htmlFor="birthdate" className="tracking-wider">Birth Date <span className='text-red-500'>*</span></label>
                    <input {...register("birthdate")} id="birthdate" type="date" className={styles.input} required/>
                    <div>&nbsp;</div>
                </div>
            </div>

            <div className="flex flex-col items-center px-[4%]">
                <div className="text-xl font-semibold tracking-wide w-full mb-2">ADDITIONAL INFORMATION</div>
                <div className="w-full flex flex-col items-center px-[2%] py-[2rem] outline outline-green-800 outline-1 rounded-lg">
                    <div className={styles.additionalContainer}>
                        <label htmlFor="referral" className="tracking-wider">How did you hear about us?</label>
                        <input {...register("referral")} type="text" id="referral" className={styles.input}/>
                        <div>&nbsp;</div>
                    </div>
                    <div className={styles.additionalContainer}>
                        <label htmlFor="comments" className="tracking-wider">Comments</label>
                        <textarea {...register("comments")} rows={4} id="comments" className={styles.textarea}/>
                        <div>&nbsp;</div>
                    </div>
                </div>
            </div>
            <button type="submit" className={styles.submit} ref={submitButton}>Submit</button>
            <div className={`${styles.greenColor} ${styles.success}`} ref={successElement}>Message sent successfully!</div>
            <div className={`${styles.greenColor} ${styles.error}`} ref={errorElement}>Message not sent. Please try again.</div>
        </form>
    )
}