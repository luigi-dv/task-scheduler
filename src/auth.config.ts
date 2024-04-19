import GitHub from "@auth/core/providers/github";
import Google from "@auth/core/providers/google";
import {NextAuthConfig} from "next-auth";
import Resend from "@auth/core/providers/resend";

export default {
    providers: [
        GitHub, 
        Google,
        Resend({
            from: "no-reply@ldvloper.com",
        }),
    ],
} satisfies NextAuthConfig