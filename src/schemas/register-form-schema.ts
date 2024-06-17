import { z } from 'zod'

export const registerFormSchema = z.object({
  name: z
    .string({ required_error: 'Por favor, informe seu nome' })
    .min(3, 'Mínimo 3 caracteres'),
  cpf: z
    .string({ required_error: 'Por favor, informe seu CPF' })
    .min(14, 'CPF inválido'),
  email: z
    .string({ required_error: 'Por favor, informe seu e-mail' })
    .email('Por favor, informe um e-mail válido'),
  password: z
    .string({ required_error: 'Por favor, informe sua senha' })
    .min(6, 'A senha deve ter pelo menos 6 caracteres'),
})

export type RegisterFormSchema = z.infer<typeof registerFormSchema>
