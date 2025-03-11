import type { LinksFunction } from '@remix-run/node'
import { Links, LiveReload, Scripts } from '@remix-run/react'
import { cssBundleHref } from '@remix-run/css-bundle'

import faviconAssetUrl from './assets/favicon.svg'
import fontStylesheetUrl from './styles/font.css'
import './styles/global.css'
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
		cssBundleHref ? { rel: 'stylesheet', href: cssBundleHref } : null,
	].filter(Boolean)
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
