import { z } from "zod";
import { services } from "@/data/services";

export const budgetOptions = [
  "Under ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000 – ₹3,00,000",
  "₹3,00,000 – ₹10,00,000",
  "Above ₹10,00,000",
  "Not sure yet",
] as const;

export const serviceOptions = [...services.map((s) => s.title), "Not sure — need advice"] as const;

const freeEmailDomains = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "rediffmail.com"];

export const contactSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(80),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(120),
  // International phone, normalised to +<country><number>. A bare 10-digit Indian mobile gets +91.
  phone: z
    .string()
    .trim()
    .transform((v) => {
      const s = v.replace(/[\s\-().]/g, "").replace(/^00/, "+");
      if (/^[6-9]\d{9}$/.test(s)) return `+91${s}`;
      return s.startsWith("+") ? s : `+${s}`;
    })
    .pipe(z.string().regex(/^\+[1-9]\d{6,14}$/, "Enter a valid phone number with country code, e.g. +971 50 123 4567")),
  company: z.string().trim().min(2, "Please enter your company name").max(120),
  website: z
    .string()
    .trim()
    .max(200)
    .optional()
    .or(z.literal(""))
    .refine(
      (v) => !v || /^(https?:\/\/)?([\w-]+\.)+[a-z]{2,}(\/\S*)?$/i.test(v),
      "Please enter a valid website URL",
    ),
  service: z.string().refine((v) => (serviceOptions as readonly string[]).includes(v), "Please select a service"),
  budget: z.string().refine((v) => (budgetOptions as readonly string[]).includes(v), "Please select a budget range"),
  message: z.string().trim().min(20, "Tell us a little more (at least 20 characters)").max(2000),
  // Honeypot — must stay empty. Hidden from humans.
  companyFax: z.string().max(0).optional(),
  // Time the form was rendered (ms). Submissions faster than a few seconds are likely bots.
  startedAt: z.number().optional(),
});

export type ContactFormInput = z.input<typeof contactSchema>;
export type ContactFormData = z.output<typeof contactSchema>;

export const isFreeEmail = (email: string) =>
  freeEmailDomains.includes(email.split("@")[1]?.toLowerCase() ?? "");
