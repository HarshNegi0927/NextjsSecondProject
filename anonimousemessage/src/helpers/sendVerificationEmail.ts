import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";


export async function sendVerificationEmail(
    email: string,
    username: string,
    verifyCode: string
):Promise<ApiResponse>{
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Verification Code',
            react: VerificationEmail({username,otp:verifyCode}),
          });
        return{success:true,message:"Verifiaction Email Send SuccessFully!"}
    } catch (error) {
        console.error("error in sending error",error);
        return{
            success:false,message:"failed sending the email"
        }
    }
}