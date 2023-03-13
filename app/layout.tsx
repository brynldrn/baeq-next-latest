import './globals.css'

export const metadata = {
  title: 'Bryan Aldrin E. Quinalayo | Senior React Developer',
  description: 'Senior React Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
