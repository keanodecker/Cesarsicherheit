/**
 * Kennzeichnung KI-generierter Bilder gemäß Art. 50 EU AI Act (gültig ab 02.08.2026).
 *
 * Die Kennzeichnung muss direkt im Bild sitzen — ein Hinweis in der Bildunterschrift
 * oder ein Sammelhinweis im Impressum genügt laut EU Code of Practice nicht.
 * Sie muss beim ersten Sichtkontakt erkennbar sein und lesbar bleiben; der
 * Text-Shadow hält sie deshalb auch auf hellen Bildstellen lesbar.
 *
 * Einsatz: innerhalb eines Containers mit `position: relative`, direkt neben dem <Image>.
 */
export function AiLabel({ position = "bottom-right" }: { position?: "top-right" | "bottom-right" }) {
  const placement = position === "top-right" ? "top-3 right-3" : "bottom-3 right-3";

  return (
    <span
      className={`absolute ${placement} z-10 pointer-events-none select-none
                  text-[10px] font-normal leading-none tracking-wide text-white/60`}
      style={{ textShadow: "0 1px 3px rgba(0,0,0,.85)" }}
    >
      KI-generiert
    </span>
  );
}
