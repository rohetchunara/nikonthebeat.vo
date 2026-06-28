import { MessageCircle } from "lucide-react"

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/9779868573730"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with NIKONTHEBEATS on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center"
    >
      {/* warm, muted ambient glow that intensifies slowly on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 rounded-full opacity-0 blur-xl transition-opacity duration-700 ease-in-out group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 50%, var(--mood-soft, oklch(0.66 0.14 60 / 24%)), transparent 70%)",
        }}
      />
      {/* translucent pure-black blur disk with a hairline charcoal edge */}
      <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-black/40 shadow-lg shadow-black/40 backdrop-blur-md transition-all duration-700 ease-in-out group-hover:border-white/20 group-hover:bg-black/55">
        <MessageCircle
          className="h-6 w-6 text-white transition-transform duration-700 ease-in-out group-hover:scale-110"
          strokeWidth={1.5}
        />
      </span>
    </a>
  )
}
