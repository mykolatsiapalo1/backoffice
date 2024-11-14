import * as z from "zod";

export const formSchema = z.object({
  fullname: z.string().refine((data) => data.trim() !== "", {
    message: "Full name is required",
  }),
  username: z.string().refine((data) => data.trim() !== "", {
    message: "Username is required",
  }),
  email: z
    .string()
    .email()
    .refine((data) => data.trim() !== "", {
      message: "Email is required",
    }),
  password: z
    .string()

    .refine((data) => data.trim() !== "", {
      message: "Password is required",
    })
    .refine((data) => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.*\s).{8,}$/.test(data), {
      message: "Password must be at least 8 characters and may contain letters, numbers, and special characters",
    }),
});
