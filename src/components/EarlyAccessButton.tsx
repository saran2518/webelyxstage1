import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Paste the Google Play link here when it is ready. While it is empty the
// button stays visible but inactive, so no button leads to a missing page.
export const PLAY_STORE_URL = "";

const EarlyAccessButton = ({ className }: { className?: string }) => {
  const base =
    "early-access-action btn-glow h-auto rounded-lg px-7 py-3.5 font-sans text-sm font-medium shadow-soft";

  if (!PLAY_STORE_URL) {
    return (
      <Button type="button" disabled aria-disabled="true" className={cn(base, className)}>
        Get early access
      </Button>
    );
  }

  return (
    <Button asChild className={cn(base, className)}>
      <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
        Get early access
      </a>
    </Button>
  );
};

export default EarlyAccessButton;
