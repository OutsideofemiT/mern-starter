MERN Starter Template

A simple boilerplate for full-stack projects using MongoDB, Express, React + Vite, and Node.js. Clone once—reuse for client work, hobby projects, or team hackathons.

Directory:
mern-starter/
  client/   - React + Vite frontend
  server/   - Node.js + Express + MongoDB backend
  README.md
  .gitignore

Setup & Installation:
1. Clone template
   git clone https://github.com/OutsideofemiT/mern-starter.git
   cd mern-starter

2. Client Setup (React + Vite)
   cd client
   npm install
   npm run dev

3. Server Setup (Express + MongoDB)
   cd server
   npm install
   # Copy .env.example to .env and fill in your own values (never commit actual secrets!)
   npm run dev

Environment Variables:
- Both /client and /server have .env.example files.
- Fill in your local .env (API keys, DB URI, etc).

VS Code Settings (Optional but recommended):
- Extensions: ESLint, Prettier, EditorConfig, GitLens
- Workspace settings:
    "editor.formatOnSave": true
    "files.exclude": { "node_modules": true, "dist": true }

Included Features:
- API route: /api/hello for backend testing
- Starter User model (Mongoose)
- JWT middleware for user authentication
- Organized folders for components, pages, and utils (frontend)
- Example routing stub (frontend)

Dev Scripts:
- Client: npm run dev
- Server: npm run dev

Deployment:
- Templates work with any Node/JS host: Render, Netlify, Heroku, Vercel
- Add deploy instructions as needed.

Contributing:
- Open PRs or issues for improvements and starter features.
- Make it yours—customize for your own MERN workflow!

--------------------------
Paste this into your new starter’s README for a simple but comprehensive quickstart!
