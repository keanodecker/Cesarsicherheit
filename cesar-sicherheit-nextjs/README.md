# Cesar Sicherheit - Next.js Website

Dies ist die Next.js-Version der Cesar Sicherheit Website, nachgebaut aus dem WordPress/Elementor Original.

## Features

- ✅ **Next.js 14** mit App Router
- ✅ **TypeScript** für Type-Safety
- ✅ **Tailwind CSS** für Styling
- ✅ **Framer Motion** für Animationen (Fade-in, Slide-in, Counter-Animationen)
- ✅ **Responsive Design** (Mobile-first)
- ✅ **Optimierte Bilder** (mit Platzhaltern)
- ✅ **SEO-freundlich** (Metadaten, semantisches HTML)
- ✅ **Kontaktformular** (Client-side)
- ✅ **Google Maps** Integration

## Installation

1. **Projekt klonen/entpacken** und in das Verzeichnis wechseln:
```bash
cd cesar-sicherheit-nextjs
```

2. **Abhängigkeiten installieren**:
```bash
npm install
```

3. **Bilder einfügen**:
   - Kopiere deine Bilder in den Ordner `public/images/`
   - Benenne sie entsprechend um:
     - `bild-logo.png` (Dein Logo - transparent)
     - `bild-1.jpg` (Hero Hintergrund - 3 Sicherheitskräfte)
     - `bild-2.jpg` (Veranstaltungsschutz Karte)
     - `bild-3.jpg` (Objektschutz Karte)
     - `bild-4.jpg` (Geschäftsführer Portrait)
     - `bild-5.jpg` (Team Gruppenbild)
     - `bild-6.jpg` (Veranstaltung - Meeting/Handshake)
     - `bild-7.jpg` (Veranstaltung - Sicherheitspersonal)
     - `bild-8.jpg` (Veranstaltung - Einlasskontrolle)
     - `bild-9.jpg` (Veranstaltung - Backstage)
     - `bild-10.jpg` (Objektschutz - Gebäude)
     - `bild-11.jpg` (Objektschutz - Sicherheitskonzept)
     - `bild-12.jpg` (Objektschutz - Baustelle)

4. **Development Server starten**:
```bash
npm run dev
```

5. **Im Browser öffnen**: [http://localhost:3000](http://localhost:3000)

## Build für Produktion

```bash
npm run build
```

Die statischen Dateien werden im `dist`-Ordner erstellt und können auf jeden Static-Host (Netlify, Vercel, GitHub Pages, etc.) deployt werden.

## Projektstruktur

```
cesar-sicherheit-nextjs/
├── app/                    # Next.js App Router
│   ├── globals.css         # Globale Styles
│   ├── layout.tsx          # Root Layout (Navbar + Footer)
│   ├── page.tsx            # Homepage
│   ├── ueber-uns/          # Über Uns Seite
│   ├── veranstaltungsschutz/ # Veranstaltungsschutz Seite
│   ├── objektschutz/       # Objektschutz Seite
│   └── kontakt/            # Kontakt Seite
├── components/             # React Komponenten
│   ├── ui/                 # UI-Komponenten (Animationen)
│   ├── Navbar.tsx          # Navigation
│   └── Footer.tsx          # Footer
├── public/                 # Statische Dateien
│   └── images/             # Bilder
├── lib/                    # Utilities
├── next.config.js          # Next.js Config
├── tailwind.config.ts      # Tailwind Config
└── package.json            # Dependencies
```

## Anpassungen für Cloud Code / Cursor

Wenn du die Bilder mit Cloud Code (Cursor, GitHub Copilot, etc.) austauschen möchtest:

1. **Bilder hochladen** in `public/images/`
2. **Prompt für Cloud Code**:
   ```
   Ersetze alle Bild-Referenzen in den Components:
   - bild-1.jpg = Hero Hintergrund mit Sicherheitskräften
   - bild-2.jpg = Veranstaltungsschutz (Festival/Event)
   - bild-3.jpg = Objektschutz (Gebäude)
   - bild-4.jpg = Geschäftsführer Portrait
   - bild-5.jpg = Team Gruppenfoto
   - bild-6.jpg bis bild-12.jpg = entsprechende Section-Bilder

   Optimiere alle Bilder für Web (WebP Format, lazy loading).
   ```

## Farbschema (aus dem Original)

- **Primary**: `#1e3a5f` (Dunkelblau)
- **Accent**: `#d4a84b` (Gold/Gelb)
- **Background**: Gradient von Weiß zu Hellgrau

## Technische Details

- **Animationen**: Framer Motion (Scroll-Trigger, Fade-ins, Slide-ins)
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)
- **Forms**: React State Management (noch nicht mit Backend verbunden)

## Wichtige Hinweise

1. **Kontaktformular**: Das Formular ist client-side only. Für Produktion musst du ein Backend (z.B. Next.js API Routes, Formspree, oder EmailJS) hinzufügen.

2. **Google Maps**: Der iFrame ist mit einer Beispiel-Adresse (Doler Pl. 3, Lahr) konfiguriert. Passe die URL in `app/kontakt/page.tsx` an.

3. **SEO**: Metadaten sind in `app/layout.tsx` definiert.

## Support

Bei Fragen oder Problemen einfach melden!
