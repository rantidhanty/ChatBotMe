function buildReply(message: string) {
  const normalizedMessage = message.toLowerCase();

  if (normalizedMessage.includes("props")) {
    return "Props adalah jalur data antar komponen. Untuk latihan ini, data awal page dikirim ke komponen client lewat props.";
  }

  if (normalizedMessage.includes("api")) {
    return "API route adalah jalur request dari frontend ke backend. Di latihan ini, /api/chat adalah backend dummy yang menerima pesan lalu membalas JSON.";
  }

  return `Backend dummy menerima pesan: "${message}". Nanti di tahap berikutnya, balasan statis seperti ini bisa diganti dengan provider AI sungguhan.`;
}

export async function GET() {
  return Response.json({
    name: "ChatBotMe dummy chat endpoint",
    purpose: "Latihan memahami alur request frontend ke backend di Next.js",
  });
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { message?: unknown };
    const message =
      typeof body.message === "string" ? body.message.trim() : "";

    if (!message) {
      return Response.json(
        { error: "Field message wajib berisi teks." },
        { status: 400 }
      );
    }

    return Response.json({
      reply: buildReply(message),
    });
  } catch {
    return Response.json(
      { error: "Body request tidak valid." },
      { status: 400 }
    );
  }
}
