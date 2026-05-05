import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { z } from "zod";
import underAgeCartoon from "@/assets/under-age-cartoon.png";

const calculateAge = (dob: Date): number => {
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const m = today.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) age--;
  return age;
};

const detailsSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  dob: z.date({ required_error: "Please select your date of birth" }),
  email: z.string().trim().email("Please enter a valid email").max(255),
});

const EarlyAccess = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<"details" | "verify" | "success" | "underage">("details");
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [dobDay, setDobDay] = useState<string>("");
  const [dobMonth, setDobMonth] = useState<string>("");
  const [dobYear, setDobYear] = useState<string>("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const days = useMemo(() => Array.from({ length: 31 }, (_, i) => i + 1), []);
  const months = useMemo(
    () => [
      { value: 1, label: "January" }, { value: 2, label: "February" }, { value: 3, label: "March" },
      { value: 4, label: "April" }, { value: 5, label: "May" }, { value: 6, label: "June" },
      { value: 7, label: "July" }, { value: 8, label: "August" }, { value: 9, label: "September" },
      { value: 10, label: "October" }, { value: 11, label: "November" }, { value: 12, label: "December" },
    ],
    []
  );
  const years = useMemo(() => {
    const current = new Date().getFullYear();
    return Array.from({ length: current - 1900 + 1 }, (_, i) => current - i);
  }, []);

  const buildDob = (): Date | null => {
    if (!dobDay || !dobMonth || !dobYear) return null;
    const d = new Date(Number(dobYear), Number(dobMonth) - 1, Number(dobDay));
    if (
      d.getFullYear() !== Number(dobYear) ||
      d.getMonth() !== Number(dobMonth) - 1 ||
      d.getDate() !== Number(dobDay)
    ) return null;
    return d;
  };

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    const dobDate = buildDob();
    if (!dobDate) {
      toast({ title: "Please select a valid date of birth", variant: "destructive" });
      return;
    }
    const parsed = detailsSchema.safeParse({ name, dob: dobDate, email });
    if (!parsed.success) {
      toast({ title: "Please check your details", description: parsed.error.errors[0].message, variant: "destructive" });
      return;
    }
    const age = calculateAge(parsed.data.dob);
    if (age < 18) {
      setStep("underage");
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.signInWithOtp({
      email: parsed.data.email,
      options: {
        shouldCreateUser: true,
        emailRedirectTo: `${window.location.origin}/early-access`,
        data: { name: parsed.data.name, age },
      },
    });
    setLoading(false);
    if (error) {
      toast({ title: "Could not send code", description: error.message, variant: "destructive" });
      return;
    }
    toast({ title: "Verification code sent", description: `We sent a 6-digit code to ${parsed.data.email}` });
    setStep("verify");
  };

  const handleVerifyAndRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length !== 6) {
      toast({ title: "Enter the 6-digit code", variant: "destructive" });
      return;
    }
    setLoading(true);
    const { data, error } = await supabase.auth.verifyOtp({
      email: email.trim(),
      token: otp,
      type: "email",
    });
    if (error || !data.user) {
      setLoading(false);
      toast({ title: "Invalid or expired code", description: error?.message, variant: "destructive" });
      return;
    }

    const { error: insertError } = await supabase.from("early_access_signups").insert({
      user_id: data.user.id,
      name: name.trim(),
      age: (() => { const d = buildDob(); return d ? calculateAge(d) : 0; })(),
      email: email.trim(),
    });
    setLoading(false);

    if (insertError && !insertError.message.includes("duplicate")) {
      toast({ title: "Could not complete registration", description: insertError.message, variant: "destructive" });
      return;
    }
    setStep("success");
  };

  return (
    <Layout>
      <section className="min-h-[80vh] flex items-center justify-center py-24 md:py-32 px-5">
        <div className="w-full max-w-xl bg-card border border-border rounded-2xl shadow-soft p-8 md:p-12 animate-fade-up">
          <div className="text-center mb-10">
            <p className="font-sans text-xs uppercase tracking-[0.25em] text-primary mb-3">Early Access</p>
            <h1 className="font-serif text-3xl md:text-4xl font-normal tracking-tight text-foreground">
              {step === "success" && "Welcome to Elyxer"}
              {step === "underage" && "Almost There — Just Not Yet"}
              {(step === "details" || step === "verify") && "Request Your Invitation"}
            </h1>
            <p className="mt-4 font-sans text-sm text-muted-foreground leading-relaxed">
              {step === "details" && "Share a few details to begin. We will verify your email with a one-time code."}
              {step === "verify" && `Enter the 6-digit code sent to ${email}.`}
              {step === "success" && "You are on the list. We will be in touch with next steps soon."}
              {step === "underage" && "Elyxer is built for grown-ups. You must be at least 18 years old to join."}
            </p>
          </div>

          {step === "details" && (
            <form onSubmit={handleSendOtp} className="space-y-6">
              <div className="space-y-2">
                <label className="font-sans text-xs uppercase tracking-widest text-muted-foreground">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  maxLength={100}
                  className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 font-serif text-lg text-foreground transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="font-sans text-xs uppercase tracking-widest text-muted-foreground">Date of Birth</label>
                <div className="grid grid-cols-3 gap-3">
                  <Select value={dobDay} onValueChange={setDobDay}>
                    <SelectTrigger className="h-12 font-serif text-base">
                      <SelectValue placeholder="Day" />
                    </SelectTrigger>
                    <SelectContent className="max-h-72 bg-popover">
                      {days.map((d) => (
                        <SelectItem key={d} value={String(d)}>{d}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select value={dobMonth} onValueChange={setDobMonth}>
                    <SelectTrigger className="h-12 font-serif text-base">
                      <SelectValue placeholder="Month" />
                    </SelectTrigger>
                    <SelectContent className="max-h-72 bg-popover">
                      {months.map((m) => (
                        <SelectItem key={m.value} value={String(m.value)}>{m.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select value={dobYear} onValueChange={setDobYear}>
                    <SelectTrigger className="h-12 font-serif text-base">
                      <SelectValue placeholder="Year" />
                    </SelectTrigger>
                    <SelectContent className="max-h-72 bg-popover">
                      {years.map((y) => (
                        <SelectItem key={y} value={String(y)}>{y}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-sans text-xs uppercase tracking-widest text-muted-foreground">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  maxLength={255}
                  className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 font-serif text-lg text-foreground transition-colors"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full mt-4 inline-flex items-center justify-center rounded-lg bg-primary px-7 py-3.5 text-sm font-sans font-medium text-primary-foreground transition-all duration-300 hover:opacity-90 disabled:opacity-60"
              >
                {loading ? "Sending code..." : "Send Verification Code"}
              </button>
            </form>
          )}

          {step === "verify" && (
            <form onSubmit={handleVerifyAndRegister} className="space-y-8">
              <div className="flex justify-center">
                <InputOTP maxLength={6} value={otp} onChange={setOtp}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </div>
              <button
                type="submit"
                disabled={loading || otp.length !== 6}
                className="w-full inline-flex items-center justify-center rounded-lg bg-primary px-7 py-3.5 text-sm font-sans font-medium text-primary-foreground transition-all duration-300 hover:opacity-90 disabled:opacity-60"
              >
                {loading ? "Verifying..." : "Register for Early Access"}
              </button>
              <button
                type="button"
                onClick={() => setStep("details")}
                className="w-full text-xs font-sans text-muted-foreground hover:text-foreground transition-colors"
              >
                ← Edit details
              </button>
            </form>
          )}

          {step === "success" && (
            <div className="text-center space-y-6">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <button
                onClick={() => navigate("/")}
                className="inline-flex items-center justify-center rounded-lg border border-border px-7 py-3 text-sm font-sans font-medium text-foreground hover:bg-secondary transition-all"
              >
                Return Home
              </button>
            </div>
          )}

          {step === "underage" && (
            <div className="text-center space-y-6">
              <img
                src={underAgeCartoon}
                alt="Friendly cartoon character holding a 'Come back later' sign"
                width={768}
                height={768}
                loading="lazy"
                className="mx-auto w-56 h-56 object-contain"
              />
              <p className="font-serif text-lg text-foreground">
                Thanks for your curiosity — but you'll have to grow into this one.
              </p>
              <p className="font-sans text-sm text-muted-foreground">
                Come back when you've blown out a few more candles. We'll be waiting. 🎂
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default EarlyAccess;
