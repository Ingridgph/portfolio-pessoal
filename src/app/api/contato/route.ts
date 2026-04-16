import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { nome, email, mensagem } = await req.json();

  if (!nome || !email || !mensagem) {
    return NextResponse.json({ error: "Campos obrigatórios ausentes." }, { status: 400 });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: "Portfolio <onboarding@resend.dev>",
      to: "ingridgomespereira98@gmail.com",
      reply_to: email,
      subject: `Mensagem de ${nome} via portfólio`,
      text: `Nome: ${nome}\nE-mail: ${email}\n\n${mensagem}`,
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Falha ao enviar e-mail." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
