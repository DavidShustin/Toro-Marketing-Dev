import React, { useRef, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formRef.current) return;

        const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
            const data = new FormData(formRef.current);
            const lines = [
                `Name: ${data.get("name") || "-"}`,
                `Business: ${data.get("business") || "-"}`,
                `Email: ${data.get("email") || "-"}`,
                `Phone: ${data.get("phone") || "-"}`,
                "",
                "How can we help?",
                `${data.get("message") || "-"}`,
            ];
            const subject = encodeURIComponent("New Inquiry — Contact Page");
            const body = encodeURIComponent(lines.join("\n"));
            window.location.href = `mailto:kyle@toro-marketing.com?subject=${subject}&body=${body}`;
            return;
        }

        try {
            setStatus("sending");
            await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
            setStatus("ok");
            formRef.current.reset();
        } catch {
            setStatus("err");
        }
    };

    return (
        <div className="min-h-screen bg-white text-toro-dark">
            <Navigation />
            <main className="pt-16">
                <section className="py-16 px-4">
                    <div className="container mx-auto max-w-3xl">
                        <Card className="rounded-2xl border-toro-gold/20">
                            <CardHeader className="text-center">
                                <CardTitle className="text-3xl font-bold">📬 Contact Our Team</CardTitle>
                                <p className="text-toro-grey">We’ll reply within one business day.</p>
                            </CardHeader>
                            <CardContent>
                                <form ref={formRef} onSubmit={onSubmit} className="grid gap-4">
                                    <div className="grid gap-2 md:grid-cols-2">
                                        <input name="name" required placeholder="Name" className="h-11 rounded-md border border-toro-gold/20 px-3" />
                                        <input name="business" placeholder="Business Name" className="h-11 rounded-md border border-toro-gold/20 px-3" />
                                    </div>
                                    <div className="grid gap-2 md:grid-cols-2">
                                        <input name="email" type="email" required placeholder="Email" className="h-11 rounded-md border border-toro-gold/20 px-3" />
                                        <input name="phone" placeholder="Phone (Optional)" className="h-11 rounded-md border border-toro-gold/20 px-3" />
                                    </div>
                                    <textarea name="message" required rows={6} placeholder="How can we help?" className="rounded-md border border-toro-gold/20 p-3" />
                                    <div className="flex items-center gap-3">
                                        <Button type="submit" variant="gold" disabled={status === "sending"} className="px-6 py-3 font-semibold">
                                            {status === "sending" ? "Sending..." : "🚀 Submit Inquiry"}
                                        </Button>
                                        {status === "ok" && <span className="text-green-600 text-sm">Thanks! We’ll be in touch.</span>}
                                        {status === "err" && <span className="text-red-600 text-sm">Something went wrong. Try again.</span>}
                                    </div>
                                </form>
                                <div className="mt-6 text-sm text-toro-grey">
                                    Prefer email? <a className="text-toro-gold underline" href="mailto:kyle@toro-marketing.com">kyle@toro-marketing.com</a>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </main>
            <div className="bg-toro-dark border-b border-white/15">
                <Footer />
            </div>
        </div>
    );
};

export default Contact;
