import { EmailTemplate } from "../../[locale]/Components/Email-template";
import { Resend } from "resend";



const resend = new Resend(process.env.RESEND_API_KEY || "");



export async function POST(request: Request) {
  const { name, email, message } = await request.json();
  const receiverEmail = process.env.RECEIVER_EMAIL || "";

 
  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: receiverEmail,
      subject: "Hello world",
      react: EmailTemplate({ name, email, message }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
