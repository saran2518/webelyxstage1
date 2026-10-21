import { useId } from "react";
import { instagramGlyph } from "@/content/media";

const InstagramGlyph = ({ size, gradient = false }: { size: number; gradient?: boolean }) => {
  const gradientId = `instagram-${useId().replace(/:/g, "")}`;

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="instagram-glyph">
      {gradient && (
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" className="instagram-stop-sun" />
            <stop offset="25%" className="instagram-stop-orange" />
            <stop offset="50%" className="instagram-stop-pink" />
            <stop offset="75%" className="instagram-stop-purple" />
            <stop offset="100%" className="instagram-stop-blue" />
          </linearGradient>
        </defs>
      )}
      <path d={instagramGlyph} fill={gradient ? `url(#${gradientId})` : "currentColor"} />
    </svg>
  );
};

export default InstagramGlyph;