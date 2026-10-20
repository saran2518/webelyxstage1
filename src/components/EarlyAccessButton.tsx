import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const EarlyAccessButton = ({ className }: { className?: string }) => (
  <Button asChild className={cn("early-access-action btn-glow h-auto rounded-lg px-7 py-3.5 font-sans text-sm font-medium shadow-soft", className)}>
    <Link to="/early-access">Get early access</Link>
  </Button>
);

export default EarlyAccessButton;