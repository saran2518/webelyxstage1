import { VideoSlot } from "@/content/media";

const SlotMedia = ({ slot, alt, className, eager = false }: {
  slot: string | VideoSlot;
  alt: string;
  className?: string;
  eager?: boolean;
}) => {
  if (typeof slot === "string") {
    return <img src={slot} alt={alt} className={className} loading={eager ? "eager" : "lazy"} />;
  }
  if (!slot.src) {
    return <img src={slot.poster} alt={alt} className={className} loading="lazy" />;
  }
  return <video src={slot.src} poster={slot.poster} aria-label={alt} className={className} autoPlay muted loop playsInline />;
};

export default SlotMedia;