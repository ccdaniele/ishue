

import './globals.css'
import { Roboto } from "next/font/google"

const roboto = Roboto({ weight: "400", subsets: ["latin"] })

// const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'ishue',
  description: 'ishue app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
