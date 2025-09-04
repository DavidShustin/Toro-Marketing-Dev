import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InlineWidget } from "react-calendly";

const Schedule: React.FC = () => {
    // Reads from .env (marketing-import/.env). Falls back to your live link just in case.
    const bookingUrl =
        import.meta.env.VITE_CALENDLY_URL || "https://calendly.com/kyle-toro-marketing/60min";

    return (
        <div className="min-h-screen bg-white text-toro-dark">
            <Navigation />
            <main className="pt-16">
                <section className="py-16 px-4 bg-waves-gold-soft text-toro-dark">
                    <div className="container mx-auto max-w-5xl">
                        <Card className="rounded-2xl border-toro-gold/20 bg-toro-dark text-white">
                            <CardHeader className="text-center">
                                <CardTitle className="text-3xl font-bold text-light">📅 Schedule a Call</CardTitle>
                                <p className="text-toro-grey">Pick a time that works for you—calendar invite is automatic.</p>
                            </CardHeader>
                            <CardContent>
                                <div className="rounded-xl border border-toro-gold/20 overflow-hidden">
                                    <InlineWidget
                                        url={bookingUrl}
                                        styles={{ height: "760px" }}
                                        pageSettings={{
                                            primaryColor: "#976811",
                                            textColor: "#2d2d2d",
                                            backgroundColor: "#ffffff",
                                            hideEventTypeDetails: false,
                                            hideGdprBanner: true,
                                        }}
                                    />
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

export default Schedule;