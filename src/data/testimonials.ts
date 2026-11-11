import type { Testimonial } from "@/types";

/**
 * SAMPLE CONTENT — NOT REAL REVIEWS.
 * Placeholder testimonials that demonstrate layout only. Replace with genuine,
 * permission-granted client testimonials and set isSample: false.
 */
export const testimonials: Testimonial[] = [
  {
    id: "sample-1",
    name: "Client Name",
    designation: "Founder",
    company: "Sample Company — E-commerce",
    quote: "This is placeholder text for a client testimonial. Replace it with a genuine quote describing the client's experience working with the team.",
    isSample: true,
  },
  {
    id: "sample-2",
    name: "Client Name",
    designation: "Head of Marketing",
    company: "Sample Company — Real Estate",
    quote: "Sample testimonial copy. A real testimonial here would describe the challenge, what changed, and how the partnership felt — in the client's own words.",
    isSample: true,
  },
  {
    id: "sample-3",
    name: "Client Name",
    designation: "Director",
    company: "Sample Company — Healthcare",
    quote: "Placeholder testimonial. Only publish real feedback that the client has approved in writing, along with their name, role and photo.",
    isSample: true,
  },
];
