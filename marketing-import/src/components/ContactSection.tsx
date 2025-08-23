import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Size = "normal" | "compact";
type Variant = "light" | "dark";

interface Props {
  variant?: Variant;  // "light" (default) or "dark"
  size?: Size;        // "normal" (default) or "compact"
  embed?: boolean;    // render only the card, without outer <section>
  className?: string;
}

const ContactSection: React.FC<Props> = ({
  variant = "light",
  size = "normal",
  embed = false,
  className,
}) => {
  const isDark = variant === "dark";

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const body = encodeURIComponent(
      [
        `Name: ${fd.get("name") || "-"}`,
        `Business: ${fd.get("business") || "-"}`,
        `Email: ${fd.get("email") || "-"}`,
        `Phone: ${fd.get("phone") || "-"}`,
        "",
        "How can we help?",
        fd.get("message") || "-",
      ].join("\n")
    );
    const subject = encodeURIComponent("New Inquiry — TORO");
    window.location.href = `mailto:kyle@toro-marketing.com?subject=${subject}&body=${body}`;
    e.currentTarget.reset();
  };

  // compact tweaks
  const headerPad = size === "compact" ? "p-5" : "p-6";
  const contentPad = size === "compact" ? "p-5 pt-0" : "p-6 pt-0";
  const gap = size === "compact" ? "gap-3" : "gap-4";
  const controlH = size === "compact" ? "h-10" : "h-11";
  const rows = size === "compact" ? 4 : 5;

  const cardStyle = isDark
    ? "rounded-2xl border border-white/15 bg-white/5 text-white"
    : "rounded-2xl border border-toro-gold/20 bg-white text-toro-dark";

  const inputBase = `${controlH} rounded-md px-3`;
  const inputCls = isDark
    ? `${inputBase} border border-white/15 bg-white/10 text-white placeholder-white/60`
    : `${inputBase} border border-toro-gold/20 bg-white text-toro-dark placeholder-toro-grey`;

  const textareaCls = isDark
    ? "rounded-md border border-white/15 bg-white/10 text-white placeholder-white/60 p-3"
    : "rounded-md border border-toro-gold/20 bg-white text-toro-dark placeholder-toro-grey p-3";

  const CardUI = (
    <div className={className}>
      <Card className={cardStyle}>
        <CardHeader className={headerPad}>
          <CardTitle className="text-xl md:text-2xl">📬 Contact Our Team</CardTitle>
        </CardHeader>
        <CardContent className={contentPad}>
          <form onSubmit={handleSubmit} className={`grid ${gap}`}>
            <div className={`grid ${gap} md:grid-cols-2`}>
              <input name="name" placeholder="Name" className={inputCls} required />
              <input name="business" placeholder="Business Name" className={inputCls} />
            </div>
            <div className={`grid ${gap} md:grid-cols-2`}>
              <input name="email" type="email" placeholder="Email" className={inputCls} required />
              <input name="phone" placeholder="Phone Number (Optional)" className={inputCls} />
            </div>
            <textarea name="message" placeholder="How can we help?" rows={rows} className={textareaCls} />
            <div className="text-center">
              <Button type="submit" variant="gold" className="px-6 py-3 font-semibold">
                🚀 Submit Inquiry
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );

  if (embed) return CardUI;

  return (
    <section id="contact" className={`px-4 ${size === "compact" ? "py-12" : "py-16"}`}>
      <div className="container mx-auto max-w-3xl">{CardUI}</div>
    </section>
  );
};

export default ContactSection;