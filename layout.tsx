export const metadata = {
  title: 'Radar Néon',
  description: 'Veille stratégique',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, padding: 0, backgroundColor: 'black' }}>
        {children}
      </body>
    </html>
  )
}