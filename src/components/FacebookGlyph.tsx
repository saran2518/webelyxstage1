import { facebookGlyph } from "@/content/media";

// The official path is a disc with the f cut out, so the f colour comes from a
// disc drawn underneath: blue on top, cream showing through the f opening.
const FacebookGlyph = ({ size, brand = true }: { size: number; brand?: boolean }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    className={`facebook-glyph${brand ? "" : " facebook-glyph-mono"}`}>

    {brand ?
      <>
        <circle cx="12" cy="12.044" r="12" className="facebook-glyph-ink" />
        <path d={facebookGlyph} className="facebook-glyph-mark" />
      </> :
      <path d={facebookGlyph} className="facebook-glyph-mono-mark" />
    }
  </svg>
);

export default FacebookGlyph;
