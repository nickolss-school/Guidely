import * as z from "zod";

export const LoginSchema = z.object({
  email: z.email({
    message: "Por favor, insira um e-mail válido.",
  }),
  password: z.string().min(1, {
    message: "A senha é obrigatória.",
  }),
});

export const RegisterSchema = z.object({
  fullName: z.string().min(3, {
    message: "O nome completo deve ter no mínimo 3 caracteres.",
  }),
  email: z.email({
    message: "Por favor, insira um e-mail válido.",
  }),
  password: z.string().min(6, {
    message: "A senha deve ter no mínimo 6 caracteres.",
  }),
});

export type LoginData = z.infer<typeof LoginSchema>;
export type RegisterData = z.infer<typeof RegisterSchema>;