import { PhotoSlot, VideoSlot } from "@/content/media";

type Slot = string | PhotoSlot | VideoSlot;

const SlotMedia = ({ slot, alt, className, eager = false }: {
  slot: Slot;
  alt: string;
  className?: string;
  eager?: boolean;
}) => {
  if (typeof slot === "string") {
    return <img src={slot} alt={alt} className={className} loading={eager ? "eager" : "lazy"} />;
  }
  if ("poster" in slot) {
    if (!slot.src) {
      return <img src={slot.poster} alt={alt} className={className} loading="lazy" />;
    }
    return <video src={slot.src} poster={slot.poster} aria-label={alt} className={className} autoPlay muted loop playsInline />;
  }
  return (
    <img
      src={slot.src}
      alt={alt}
      className={className}
      style={slot.focus ? { objectPosition: slot.focus } : undefined}
      loading={eager ? "eager" : "lazy"}
    />
  );
};

export default SlotMedia;
