import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ApplicationRequest {
  fullName: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  coverLetter: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const application: ApplicationRequest = await req.json();
    
    console.log("Received application from:", application.email);

    const emailResponse = await resend.emails.send({
      from: "Career Applications <careers@aghealthindustries.com>",
      to: ["kripa.ad25@gmail.com"],
      replyTo: application.email,
      subject: `New Career Application: ${application.position} - ${application.fullName}`,
      html: `
        <h2>New Career Application Received</h2>
        <hr />
        <h3>Applicant Information</h3>
        <p><strong>Full Name:</strong> ${application.fullName}</p>
        <p><strong>Email:</strong> ${application.email}</p>
        <p><strong>Phone:</strong> ${application.phone}</p>
        <p><strong>Position Applied For:</strong> ${application.position}</p>
        <p><strong>Years of Experience:</strong> ${application.experience}</p>
        
        <h3>Cover Letter</h3>
        <p style="white-space: pre-wrap;">${application.coverLetter}</p>
        
        <hr />
        <p style="color: #666; font-size: 12px;">This application was submitted through the A.G. Health Industries career page.</p>
      `,
    });

    if ((emailResponse as any).error) {
      console.error("Resend validation error:", (emailResponse as any).error);
      return new Response(JSON.stringify({ error: (emailResponse as any).error }), {
        status: (emailResponse as any).error.statusCode ?? 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("Error sending application email:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
};

serve(handler);
