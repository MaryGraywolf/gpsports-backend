import { z } from 'zod';

export const registerStepOneSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  confirmPassword: z.string().min(6),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
});

export const registerStepTwoSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1),
  surname: z.string().min(1),
  birthday: z.string().refine(val => !isNaN(Date.parse(val)), {
    message: "Invalid date format",
  }),
  gender: z.string(),
  ddd: z.number().min(1),
  phone: z.number().min(1),
  profile_picture: z.string().url().optional(),
});

export const registerStepThreeSchema = z.object({
  email: z.string().email(),
  favoriteSports: z.array(z.number()).min(1)
});
