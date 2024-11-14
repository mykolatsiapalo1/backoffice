import { z } from "zod";

export const formSchema = z.object({
  username: z.string().refine((data) => data.trim() !== "", {
    message: "Username is required",
  }),
  password: z
    .string()

    .refine((data) => data.trim() !== "", {
      message: "Password is required",
    }),
});
