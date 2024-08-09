"use client"

import { useEffect } from "react"

export default function Spinner() {
    useEffect(() => {
        async function getSpinner() {
            const { tailspin } = await import("ldrs")
            tailspin.register()
        }
        getSpinner()
    })
    return <l-tailspin size="30" speed="1.75" stroke={5} color="hsla(4, 20%, 29%, 1)"></l-tailspin>
}