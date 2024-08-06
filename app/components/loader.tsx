"use client"

import { useEffect } from "react"

export default function Loader() {
    useEffect(() => {
        async function getLoader() {
            const { spiral } = await import("ldrs")
            spiral.register()
        }
        getLoader()
    })
    return <l-spiral size="60" bg-opacity="0.1" speed="1.75" color="hsla(4, 20%, 29%, 1)"></l-spiral>
}