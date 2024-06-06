import { PropsWithChildren } from 'react'
import { Header } from '../components/header'
import { AdBanner } from '../components/ad-banner'

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <Header />
      {children}
      <AdBanner />
    </div>
  )
}