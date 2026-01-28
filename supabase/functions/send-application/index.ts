import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface ApplicationRequest {
  fullName: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  coverLetter: string;
}

// Input validation helper
const validateInput = (application: ApplicationRequest): string | null => {
  if (!application.fullName || application.fullName.length > 100) {
    return "Invalid name provided";
  }
  if (!application.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(application.email)) {
    return "Invalid email address";
  }
  if (!application.phone || application.phone.length > 20) {
    return "Invalid phone number";
  }
  if (!application.position || application.position.length > 100) {
    return "Invalid position";
  }
  if (!application.experience || application.experience.length > 50) {
    return "Invalid experience";
  }
  if (!application.coverLetter || application.coverLetter.length > 5000) {
    return "Cover letter is too long or empty";
  }
  return null;
};

// Sanitize HTML to prevent XSS
const escapeHtml = (text: string): string => {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const application: ApplicationRequest = await req.json();
    
    // Validate input
    const validationError = validateInput(application);
    if (validationError) {
      return new Response(
        JSON.stringify({ error: validationError }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    console.log("Received application from:", application.email);

    // Sanitize all input before sending email
    const sanitizedApplication = {
      fullName: escapeHtml(application.fullName),
      email: escapeHtml(application.email),
      phone: escapeHtml(application.phone),
      position: escapeHtml(application.position),
      experience: escapeHtml(application.experience),
      coverLetter: escapeHtml(application.coverLetter),
    };

    const emailResponse = await resend.emails.send({
      from: "Career Applications <careers@aghealthindustries.com>",
      to: ["kripa.ad25@gmail.com"],
      replyTo: application.email,
      subject: `New Career Application: ${sanitizedApplication.position} - ${sanitizedApplication.fullName}`,
      html: `
        <h2>New Career Application Received</h2>
        <hr />
        <h3>Applicant Information</h3>
        <p><strong>Full Name:</strong> ${sanitizedApplication.fullName}</p>
        <p><strong>Email:</strong> ${sanitizedApplication.email}</p>
        <p><strong>Phone:</strong> ${sanitizedApplication.phone}</p>
        <p><strong>Position Applied For:</strong> ${sanitizedApplication.position}</p>
        <p><strong>Years of Experience:</strong> ${sanitizedApplication.experience}</p>
        
        <h3>Cover Letter</h3>
        <p style="white-space: pre-wrap;">${sanitizedApplication.coverLetter}</p>
        
        <hr />
        <p style="color: #666; font-size: 12px;">This application was submitted through the A.G. Health Industries career page.</p>
      `,
    });

    if ((emailResponse as any).error) {
      // Log detailed error server-side only
      console.error("Resend error details:", (emailResponse as any).error);
      // Return generic error to client
      return new Response(
        JSON.stringify({ error: "Failed to send application. Please try again later." }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    console.log("Email sent successfully");

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: any) {
    // Log detailed error server-side only
    console.error("Error sending application email:", error);
    // Return generic error to client
    return new Response(
      JSON.stringify({ error: "An error occurred while submitting your application. Please try again later." }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
};

serve(handler);
