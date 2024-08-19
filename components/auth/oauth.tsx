import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

export default function OAuth() {
    const onClick = (provider: "google") => {
        signIn(provider, {
            callbackUrl: DEFAULT_LOGIN_REDIRECT,
        })
    }

    return (
        <div>
            <button 
                className="w-full outline-dotted" 
                onClick={()=>onClick("google")}>
                <FcGoogle className="h-5 w-5"/>
            </button>
        </div>
    )
}