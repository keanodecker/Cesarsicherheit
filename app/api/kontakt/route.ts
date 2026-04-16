import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, telefon, nachricht } = await req.json();

  if (!name || !email || !nachricht) {
    return NextResponse.json({ error: "Pflichtfelder fehlen" }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: "Cesar Sicherheit <kontaktformular@cesarsicherheit.de>",
      to: "info@keanodecker.com",
      replyTo: email,
      subject: `Neue Kontaktanfrage von ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e3a5f; border-bottom: 2px solid #d4a84b; padding-bottom: 8px;">
            Neue Kontaktanfrage – Cesar Sicherheit
          </h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>E-Mail:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Telefon:</strong> ${telefon || "nicht angegeben"}</p>
          <p><strong>Nachricht:</strong></p>
          <p style="background: #f5f5f5; padding: 12px; border-radius: 6px; white-space: pre-wrap;">${nachricht}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Fehler beim Senden der E-Mail" }, { status: 500 });
  }
}
