import type { LinksFunction } from '@remix-run/node'
import { Links, LiveReload, Scripts } from '@remix-run/react'
import faviconAssetUrl from './assets/favicon.svg'
import fontStylesheetUrl from './styles/font.css'
import tailwindStyleSheetUrl from './styles/tailwind.css'

export const links: LinksFunction = () => {
	return [
		{
			rel: 'icon',
			href: faviconAssetUrl,
			type: 'image/svg+xml',
		},
		{
			rel: 'stylesheet',
			href: fontStylesheetUrl,
		},
		{ rel: 'stylesheet', href: tailwindStyleSheetUrl },
	]
}

export default function App() {
	return (
		<html lang="en">
			<head>
				<Links />
			</head>
			<body>
				<p className="p-8 text-xl">Hello World</p>
				<Scripts />
				<LiveReload />
			</body>
		</html>
	)
}
