"use client"

import { registerAction } from "@/actions/register";
import { registerSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm } from 'react-hook-form';
import z from "zod";
import FormSuccess from "./form-success";
import FormError from "./form-error";

export default function RegisterForm() {
    const [success, setSuccess] = useState<string | undefined>("");
    const [error, setError] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();


    const {register, handleSubmit, formState: {errors}} = useForm<z.infer<typeof registerSchema>>({
        defaultValues: {
            email: "",
            name: "",
            password: "",
        },
        resolver: zodResolver(registerSchema),
    });

    const onSubmit = async (formData: z.infer<typeof registerSchema>) => {
        setSuccess("");
        setError("");
        
        startTransition(() =>
            registerAction(formData).then((response) => {
                setSuccess(response.success);
                setError(response.error);
            })
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="email">Email</label>
                <input {...register("email")} id="email" type="text" placeholder="example@email.com" required disabled={isPending}/>
            </div>
            <div>
                <label htmlFor="name">Name</label>
                <input {...register("name")} id="name" type="text" placeholder="John Doe" required disabled={isPending}/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input {...register("password")} id="password" type="password" placeholder="******" required disabled={isPending}/>
                <p>{errors.password && errors.password.message}</p>
            </div>

            <FormSuccess message={success}/>
            <FormError message={error}/>

            <button type="submit">Create an account</button>
        </form>
    )
}