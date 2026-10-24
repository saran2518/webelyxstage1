import { facebookGlyph } from "@/content/media";

const FacebookGlyph = ({ size, brand = true }: { size: number; brand?: boolean }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    className={`facebook-glyph${brand ? "" : " facebook-glyph-mono"}`}>

    <path d={facebookGlyph} />
  </svg>
);

export default FacebookGlyph;
