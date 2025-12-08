import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        // Валідація
        if (!name || !email || !message) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
        }

        // Тут можна додати інтеграцію з email сервісом (Resend, SendGrid, тощо)
        // Або зберегти в базу даних
        // В реальному проєкті тут буде:
        // await sendEmail({ to: "your@email.com", subject: "New Contact Form", body: message });

        return NextResponse.json(
            { success: true, message: "Message sent successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
