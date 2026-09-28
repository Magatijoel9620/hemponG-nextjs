import { MessageCircle } from "lucide-react";

export function MobileWhatsApp() {
  return (
    <a
      href="https://wa.me/254738219953?text=Hello%20Hempon%20Group%2C%20I%20would%20like%20to%20discuss%20a%20project."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed inset-x-3 bottom-3 z-40 flex items-center justify-center gap-2 rounded-2xl border border-emerald-400/20 bg-emerald-500 px-5 py-3.5 text-sm font-semibold text-white shadow-2xl shadow-emerald-950/30 transition-transform hover:-translate-y-0.5 sm:hidden"
      aria-label="Chat with Hempon Group on WhatsApp"
    >
      <MessageCircle className="h-4 w-4" />
      Chat on WhatsApp
    </a>
  );
}
