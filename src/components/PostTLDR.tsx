interface PostTLDRProps {
  children: React.ReactNode
}

/**
 * Quick-answer block placed at the top of long-form posts so AI search
 * engines (ChatGPT, Perplexity, Gemini) can extract a direct response to
 * the title's implicit question. Visible to readers as a "Resumen rápido"
 * callout; structured for LLM extraction by being the first prose block
 * after the H1.
 */
export default function PostTLDR({ children }: PostTLDRProps) {
  return (
    <aside
      aria-label="Resumen rápido del artículo"
      className="bg-solar-yellow/10 border-l-4 border-solar-yellow p-5 rounded-r-lg mb-6"
    >
      <p className="text-xs font-bold text-navy-dark uppercase tracking-wide mb-2">
        Resumen rápido
      </p>
      <div className="text-base text-gray-700 leading-relaxed [&_p]:m-0 [&_p+p]:mt-2">
        {children}
      </div>
    </aside>
  )
}
