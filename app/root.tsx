import type { LinksFunction } from "@remix-run/node";
import { Links, LiveReload, Scripts } from "@remix-run/react";

export const links: LinksFunction = () => {
  return [
    {
      rel: "icon",
      href: "/favicon.svg",
      type: "image/svg+xml",
    },
  ];
};

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
  );
}
