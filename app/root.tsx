import os from 'node:os'
import { cssBundleHref } from '@remix-run/css-bundle'
import { json, type LinksFunction } from '@remix-run/node'
import {
	Link,
	Links,
	LiveReload,
	Outlet,
	Scripts,
	useLoaderData,
} from '@remix-run/react'

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
		cssBundleHref ? { rel: 'stylesheet', href: cssBundleHref } : null,
	].filter(Boolean)
}

export async function loader() {
	return json({ username: os.userInfo().username })
}

export default function App() {
	const data = useLoaderData<typeof loader>()
	return (
		<html lang="en" className="h-full overflow-hidden">
			<head>
				<Links />
			</head>
			<body className="bg-background text-foreground flex h-full flex-col justify-between">
				<header className="container mx-auto py-6">
					<nav className="flex justify-between">
						<Link to="/">
							<div className="font-light">epic</div>
							<div className="font-bold">notes</div>
						</Link>
					</nav>
				</header>

				<div className="flex-1">
					<Outlet />
				</div>

				<div className="container mx-auto flex justify-between">
					<Link to="/">
						<div className="font-light">epic</div>
						<div className="font-bold">notes</div>
					</Link>
					<p>Built with ♥️ by {data.username}</p>
				</div>
				<div className="h-5" />

				<Scripts />
				<LiveReload />
			</body>
		</html>
	)
}
