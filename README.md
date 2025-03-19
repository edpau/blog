# Full Stack Foundations
## Styling
### 01. Links to Public Files- responsive favicon, light mode dark mode
### 02. Asset Imports- Change favicon, get favicon fingerprinted, bust the cache / Static Asset Caching Strategy
### 03. Global Styles- Apply custom fonts
### 04. Compiling CSS- add Tailwind CSS and PostCSS setup
### 05. 05. Bundling CSS- using cssBundleHref

## Routing- Remix-flat-routes
### 01. Routes, layout nesting, url nesting, index route
### 02. Links- Link, NavLink, relative route 
### 03. Route Params- $ route params, useParams(), cn()

## Data Loading
### Setup- feat: add in-memory database with singleton persistence
- Implement `utils/dbserver.ts` using `@mswjs/data` to create mock users and notes
- Use `utils/singleton.server.ts` to persist data across server reloads
- Prepopulate database with sample user (Kody) and notes
### 01 Loaders, use loader function to get db data to the UI
