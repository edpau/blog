import type { LinksFunction } from '@remix-run/node'
import { Links, LiveReload, Scripts } from '@remix-run/react'
import faviconAssetUrl from './assets/favicon.svg'
import fontStylesheetUrl from './styles/font.css'

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
	]
}

export default function App() {
	return (
		<html lang="en">
			<head>
				<Links />
			</head>
			<body>
				<p>Hello World</p>
				<Scripts />
				<LiveReload />
			</body>
		</html>
	)
}
