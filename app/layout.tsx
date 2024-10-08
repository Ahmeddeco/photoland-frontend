import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const expo2 = localFont({
	src: './fonts/Exo2-VariableFont_wght.ttf',
	variable: '--font-expo2',
})
const expo2_italic = localFont({
	src: './fonts/Exo2-Italic-VariableFont_wght.ttf',
	variable: '--font-expo2_italic',
})

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang='en'
			className={`${expo2.variable} ${expo2_italic.variable} antialiased`}
		>
			<body className='font-expo2'>{children}</body>
		</html>
	)
}
