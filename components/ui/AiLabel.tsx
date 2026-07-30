/**
 * Kennzeichnung KI-generierter Bilder gemäß Art. 50 EU AI Act (gültig ab 02.08.2026).
 *
 * Die Kennzeichnung muss direkt im Bild sitzen — ein Hinweis in der Bildunterschrift
 * oder ein Sammelhinweis im Impressum genügt laut EU Code of Practice nicht.
 * Sie muss beim ersten Sichtkontakt erkennbar sein, ausreichend Kontrast haben
 * und in lesbarer Schriftgröße dargestellt werden.
 *
 * Einsatz: innerhalb eines Containers mit `position: relative`, direkt neben dem <Image>.
 */
export function AiLabel({ position = "top-right" }: { position?: "top-right" | "bottom-right" }) {
  const placement = position === "top-right" ? "top-2 right-2" : "bottom-2 right-2";

  return (
    <span
      className={`absolute ${placement} z-10 pointer-events-none select-none rounded
                  bg-black/55 backdrop-blur-sm px-2 py-1
                  text-[11px] font-medium leading-none tracking-wide text-white`}
    >
      KI-generiert
    </span>
  );
}
