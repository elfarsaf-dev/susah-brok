import { z } from "zod";

export const newsSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  date: z.string(),
  image: z.string(),
  category: z.string(),
  author: z.string().optional()
});

export const tipsSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  image: z.string(),
  author: z.string().optional()
});

export type News = z.infer<typeof newsSchema>;
export type Tips = z.infer<typeof tipsSchema>;

export const rateSchema = z.object({
  label: z.string(),
  price: z.number(),
});

export const propertySchema = z.object({
  id: z.string(),
  name: z.string(),
  location: z.string(),
  rates: z.array(rateSchema),
  units: z.number(),
  facilities: z.array(z.string()),
  capacity: z.string(),
  notes: z.array(z.string()),
  image: z.string(),
  slideImages: z.array(z.string()).optional(),
  type: z.enum(["villa", "glamping"]),
  rating: z.number().min(1).max(5).optional()
});

export const tripSchema = z.object({
  id: z.string(),
  name: z.string(),
  category: z.enum(["short", "long"]),
  destinations: z.array(z.string()),
  duration: z.string(),
  price: z.number(),
  facilities: z.array(z.string()),
  notes: z.array(z.string()),
  image: z.string(),
  rating: z.number().min(1).max(5).optional().default(4.5),
  description: z.string(),
  capacity: z.string(),
  included: z.array(z.string())
});

export type Rate = z.infer<typeof rateSchema>;
export type Property = z.infer<typeof propertySchema>;
export type PropertyType = "villa" | "glamping";
export type Trip = z.infer<typeof tripSchema>;
export type TripCategory = "short" | "long";
