import { z } from "zod";

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
  type: z.enum(["villa", "glamping"]),
  rating: z.number().min(1).max(5).optional().default(4.5)
});

export type Rate = z.infer<typeof rateSchema>;
export type Property = z.infer<typeof propertySchema>;
export type PropertyType = "villa" | "glamping";
