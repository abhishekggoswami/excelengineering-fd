import { MessageCircle } from 'lucide-react'

const WHATSAPP_LINK = 'https://wa.link/0bii3z'

export default function WhatsAppContactButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Excel Engineering on WhatsApp"
      className="fixed bottom-6 right-6 z-50 hidden min-h-12 items-center justify-center gap-2 rounded-full border border-[#f5a623]/60 bg-[#0e5c3d] px-5 text-white shadow-[0_14px_32px_rgba(14,92,61,0.34)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#0a4a31] hover:shadow-[0_18px_36px_rgba(14,92,61,0.42)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e85d3f] lg:inline-flex"
    >
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f5a623] text-[#0e5c3d]">
        <MessageCircle className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
      </span>
      <span className="text-sm font-bold">WhatsApp us</span>
    </a>
  )
}
