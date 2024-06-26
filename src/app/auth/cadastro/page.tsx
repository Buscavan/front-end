import { Button } from '@/components/ui/button'
import { RegisterForm } from './_components/register-form'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { TermsAndPrivacy } from '@/components/application/terms-and-privacy'

export const metadata = {
  title: 'Registro',
}

export default function RegisterPage() {
  return (
    <section className="p-6 flex justify-center items-center">
      <div className="sm:max-w-sm w-full flex flex-col items-center space-y-6 sm:space-y-8">
        <div className="space-y-1 sm:space-y-2 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold">
            Faça seu Registro aqui
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Preencha os dados abaixo para cadastrar-se no sistema
          </p>
        </div>

        <RegisterForm />

        <div className="w-full flex items-center space-x-3">
          <Separator className="flex-1" />

          <p className="text-xs text-muted-foreground">OU</p>

          <Separator className="flex-1" />
        </div>

        <Button variant="outline" className="w-full" asChild>
          <Link href="/auth/login">Entre em nossa Plataforma</Link>
        </Button>

        <TermsAndPrivacy />
      </div>
    </section>
  )
}
