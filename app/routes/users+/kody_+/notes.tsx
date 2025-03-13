import { Link, NavLink, Outlet } from '@remix-run/react'

export default function NotesRoute() {
	return (
		<div className="flex h-full justify-between border-8 border-blue-500 pb-12">
			<h1 className="text-h1">Notes</h1>
			<Link to=".." relative="path">
				Back to Kody
			</Link>
			<NavLink
				to="some-note-id"
				className={({ isActive }) => `underline ${isActive ? 'bg-accent' : ''}`}
			>
				Some Note
			</NavLink>
			<Outlet />
		</div>
	)
}
