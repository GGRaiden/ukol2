# Changelog
All notable changes to this component will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-07-23
### Authors
Maxmilián Růžička
### Added
- `MainText` component with markdown rendering using `markdown-to-jsx`
  - Links rendered as `<span>` elements with dark green bold styling
  - Output contains only `<h2>`, `<span>` and `<p>` tags as required
- `UserList` component displaying users on main page
  - Server-side rendering (SSR) implementation
  - Data fetched from `usersUrl` API endpoint
  - "Show on map" functionality linking to Mapy.cz with GPS coordinates
  - "Read articles" button navigating to `/articles/[userId]`
  - Design according to `/taskImages/userList.png`
- `ArticleList` component for displaying user articles on `/articles/[userId]` page
  - Server-side rendering (SSR) implementation
  - Articles fetched from `articlesUrl` API endpoint
  - Author name loaded from `userUrl` API or React Context
  - Design according to `/taskImages/articlesList.png`
- CSS modules with Tailwind CSS for all components
- Hover effects for cards according to `/taskImages/hover.png`
- React Context implementation for sharing user data between pages
- Atomic design component structure with subcomponents in `components` folders

## [0.2.0] - 2025-05-16
### Authors
Vilém Lipold
### Updated
- Dependencies to the latest versions

## [0.1.0] - 2023-10-16
### Authors
Vilém Lipold
### Added
- Initial release
