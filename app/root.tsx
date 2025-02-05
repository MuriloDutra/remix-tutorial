import { LinksFunction } from "@remix-run/node";
import {
  Form,
  Links,
  Meta,
  Scripts,
  Outlet,
  ScrollRestoration,
  Link,
} from "@remix-run/react";
import appStylesHref from "./app.css?url";

/**
 * Every route can export a links function. They will be collected and rendered into the <Links /> component we rendered in app/root.tsx.
 */
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: appStylesHref },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div id="sidebar">
          <h1>Remix Contacts</h1>
          <div>
            <Form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div id="search-spinner" aria-hidden hidden={true} />
            </Form>
            <Form method="post">
              <button type="submit">New</button>
            </Form>
          </div>
          <nav>
            <ul>
              <li>
                <Link to={`/contacts/1`}>Your Name</Link>
              </li>
              <li>
                <Link to={`/contacts/2`}>Your Friend</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail">
          {/**
           * Since Remix is built on top of React Router, it supports nested routing.
           * In order for child routes to render inside of parent layouts,
           * we need to render an Outlet in the parent.
           */}
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
