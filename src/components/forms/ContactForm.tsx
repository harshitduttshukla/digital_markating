"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Loader2, Mail, MessageCircle } from "lucide-react";
import { contactSchema, budgetOptions, serviceOptions, type ContactFormInput, type ContactFormData } from "@/lib/validations";
import { services } from "@/data/services";
import { siteConfig, whatsappLink } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type Status = { type: "idle" } | { type: "success" } | { type: "error"; message: string };

const inputCls =
  "w-full rounded-xl border border-line bg-white/[0.03] px-4 py-3.5 text-[15px] text-white placeholder:text-white/35 transition-colors focus:border-lime focus:bg-white/[0.05] focus:outline-none aria-[invalid=true]:border-red-400/70";

export function ContactForm() {
  const params = useSearchParams();
  const [status, setStatus] = useState<Status>({ type: "idle" });

  const preService = services.find((s) => s.slug === params.get("service"))?.title ?? "";

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInput, unknown, ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
    defaultValues: { service: preService, budget: "", website: "", companyFax: "" },
  });

  useEffect(() => {
    setValue("startedAt", Date.now());
  }, [setValue]);

  const onSubmit = async (data: ContactFormData) => {
    setStatus({ type: "idle" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; message?: string };
      if (res.ok && json.ok) {
        setStatus({ type: "success" });
        reset();
      } else {
        setStatus({ type: "error", message: json.message ?? "Something went wrong. Please try again." });
      }
    } catch {
      setStatus({ type: "error", message: "Network error. Please check your connection and try again." });
    }
  };

  if (status.type === "success") {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} className="rounded-[28px] border border-lime/30 bg-lime/[0.06] p-10 text-center" role="status">
        <CheckCircle2 aria-hidden className="mx-auto size-12 text-lime" />
        <h2 className="mt-5 text-3xl font-semibold">Thank you, we&apos;ve received your enquiry.</h2>
        <p className="mx-auto mt-3 max-w-md text-muted">A strategist will review your details and get back to you within one business day.</p>
        <Button variant="outline" className="mt-8" onClick={() => setStatus({ type: "idle" })}>Send another enquiry</Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="rounded-[28px] border border-line bg-ink-2 p-6 sm:p-10" aria-describedby="form-note">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" error={errors.fullName?.message} id="fullName" required>
          <input id="fullName" autoComplete="name" className={inputCls} placeholder="Your name" aria-invalid={!!errors.fullName} {...register("fullName")} />
        </Field>
        <Field label="Business email" error={errors.email?.message} id="email" required>
          <input id="email" type="email" autoComplete="email" className={inputCls} placeholder="you@company.com" aria-invalid={!!errors.email} {...register("email")} />
        </Field>
        <Field label="Phone number" error={errors.phone?.message} id="phone" required>
          <input id="phone" type="tel" inputMode="tel" autoComplete="tel" className={inputCls} placeholder="+91 98765 43210 or +971 50 123 4567" aria-invalid={!!errors.phone} {...register("phone")} />
        </Field>
        <Field label="Company name" error={errors.company?.message} id="company" required>
          <input id="company" autoComplete="organization" className={inputCls} placeholder="Company Pvt. Ltd." aria-invalid={!!errors.company} {...register("company")} />
        </Field>
        <Field label="Website URL" error={errors.website?.message} id="website" hint="Optional">
          <input id="website" type="url" autoComplete="url" className={inputCls} placeholder="https://" aria-invalid={!!errors.website} {...register("website")} />
        </Field>
        <Field label="Service required" error={errors.service?.message} id="service" required>
          <select id="service" className={cn(inputCls, "appearance-none")} aria-invalid={!!errors.service} {...register("service")}>
            <option value="" disabled className="bg-ink-2">Select a service</option>
            {serviceOptions.map((o) => <option key={o} value={o} className="bg-ink-2">{o}</option>)}
          </select>
        </Field>
        <Field label="Monthly marketing budget" error={errors.budget?.message} id="budget" required className="sm:col-span-2">
          <select id="budget" className={cn(inputCls, "appearance-none")} aria-invalid={!!errors.budget} {...register("budget")}>
            <option value="" disabled className="bg-ink-2">Select a range</option>
            {budgetOptions.map((o) => <option key={o} value={o} className="bg-ink-2">{o}</option>)}
          </select>
        </Field>
        <Field label="Project description" error={errors.message?.message} id="message" required className="sm:col-span-2">
          <textarea id="message" rows={5} className={cn(inputCls, "resize-y")} placeholder="Your goals, current challenges, and timelines." aria-invalid={!!errors.message} {...register("message")} />
        </Field>

        {/* Honeypot — hidden from people and assistive tech */}
        <div aria-hidden className="absolute left-[-9999px] h-px w-px overflow-hidden">
          <label htmlFor="companyFax">Company fax</label>
          <input id="companyFax" tabIndex={-1} autoComplete="off" {...register("companyFax")} />
        </div>
      </div>

      <AnimatePresence>
        {status.type === "error" && (
          <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} role="alert" className="mt-6 rounded-2xl border border-red-400/30 bg-red-400/[0.07] p-4 text-sm">
            <p className="flex items-start gap-2 text-red-200"><AlertCircle aria-hidden className="mt-0.5 size-4 shrink-0" />{status.message}</p>
            <div className="mt-3 flex flex-wrap gap-4 pl-6">
              <a href={`mailto:${siteConfig.contact.email}`} className="inline-flex items-center gap-1.5 text-white underline-offset-4 hover:underline"><Mail aria-hidden className="size-4" /> {siteConfig.contact.email}</a>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-white underline-offset-4 hover:underline"><MessageCircle aria-hidden className="size-4" /> WhatsApp</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p id="form-note" className="text-sm text-muted">We&apos;ll only use your details to respond to this enquiry.</p>
        <Button type="submit" size="lg" disabled={isSubmitting} arrow={!isSubmitting} className="w-full sm:w-auto">
          {isSubmitting ? <span className="flex items-center gap-2"><Loader2 aria-hidden className="size-4 animate-spin" /> Sending…</span> : "Get my free growth audit"}
        </Button>
      </div>
    </form>
  );
}

function Field({ label, id, error, required, hint, className, children }: { label: string; id: string; error?: string; required?: boolean; hint?: string; className?: string; children: React.ReactNode }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 flex items-center justify-between text-sm font-medium text-white/85">
        <span>{label}{required && <span className="text-lime" aria-hidden> *</span>}</span>
        {hint && <span className="text-xs font-normal text-muted">{hint}</span>}
      </label>
      {children}
      {error && <p id={`${id}-error`} className="mt-1.5 text-sm text-red-300" role="alert">{error}</p>}
    </div>
  );
}
