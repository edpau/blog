import { json, type LoaderFunctionArgs } from '@remix-run/node'
import { Link, NavLink, Outlet, useLoaderData } from '@remix-run/react'
import { db } from '#app/utils/db.server.ts'
import { cn } from '#app/utils/misc.tsx'

export async function loader({ params }: LoaderFunctionArgs) {
	const { username } = params

	const owner = db.user.findFirst({
		where: {
			username: { equals: username },
		},
	})
	const notes = db.note.findMany({
		where: {
			owner: {
				username: { equals: username },
			},
		},
	})

	return json({
		owner: {
			name: owner.name,
			username: owner.username,
		},
		notes: notes.map(note => ({ id: note.id, title: note.title })),
	})
}

export default function NotesRoute() {
	const data = useLoaderData<typeof loader>()
	const ownerDisplayName = data.owner.name ?? data.owner.username
	const navLinkDefaultClassName =
		'line-clamp-2 block rounded-l-full py-2 pl-8 pr-6 text-base lg:text-xl'

	return (
		<main className="container flex h-full min-h-[400px] px-0 pb-12 md:px-8">
			<div className="grid w-full grid-cols-4 bg-muted pl-2 md:container md:mx-2 md:rounded-3xl md:pr-0">
				<div className="relative col-span-1">
					<div className="absolute inset-0 flex flex-col">
						<Link to=".." relative="path" className="pb-4 pl-8 pr-4 pt-12">
							<h1 className="text-base font-bold md:text-lg lg:text-left lg:text-2xl">
								{ownerDisplayName}'s Notes
							</h1>
						</Link>
						<ul className="overflow-y-auto overflow-x-hidden pb-12">
							{data.notes.map(note => (
								<li key={note.id} className="p1 pr-0">
									<NavLink
										to={note.id}
										className={({ isActive }) =>
											cn(navLinkDefaultClassName, isActive && 'bg-accent')
										}
									>
										{note.title}
									</NavLink>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="relative col-span-3 bg-accent md:rounded-r-3xl">
					<Outlet />
				</div>
			</div>
		</main>
	)
}
