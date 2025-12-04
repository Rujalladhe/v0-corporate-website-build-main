import { Download } from "lucide-react"

export function DownloadBrochure() {
  return (
    <>
      <a
        href="/A_V_Tech_Catalogue.pdf"
        download
        className="fixed left-9 top-1/2 hidden -translate-y-1/2 -translate-x-1/3 items-center gap-2 rounded-r-2xl bg-primary px-4 py-3 font-semibold text-white shadow-lg transition hover:bg-primary/90 sm:flex z-50"
        aria-label="Download brochure"
      >
        <Download className="h-4 w-4" />
        <span> Brochure</span>
      </a>
      <a
        href="/A_V_Tech_Catalogue.pdf"
        download
        className="fixed bottom-60 -left-4 flex  items-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-primary/90 sm:hidden z-50"
        aria-label="Download brochure"
      >
        <Download className="h-4 w-4" />
        <span>Brochure</span>
      </a>
    </>
  )
}

