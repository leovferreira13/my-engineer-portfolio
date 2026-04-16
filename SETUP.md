# Ubuntu setup (laptop)

Step-by-step instructions to run the project locally on Ubuntu. You do not need a database or mandatory external services: the app is file-based (MDX). Analytics and GitHub-related variables can be left empty; those features simply no-op.

## Prerequisites

- A recent **Ubuntu** release (22.04 or 24.04 recommended)
- **Git**
- **Node.js 22.x** (`package.json` specifies `"node": "22.x"`)
- **pnpm** version **9 or higher** (this repo pins `pnpm@10.33.0` via Corepack)
- **npm** (only to install Portless globally, as in the development guide)

Optional but helpful if native dependencies fail to compile (for example `sharp`):

```bash
sudo apt update
sudo apt install -y build-essential python3
```

---

## 1. Install Git

```bash
sudo apt update
sudo apt install -y git
git --version
```

---

## 2. Install Node.js 22 (recommended: nvm)

Install [nvm](https://github.com/nvm-sh/nvm) and use Node 22:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```

Open a new terminal (or run `source ~/.bashrc`), then:

```bash
nvm install 22
nvm use 22
node -v
```

`node -v` should print **v22.x.x**.

---

## 3. Enable pnpm with Corepack

Node ships with Corepack, which pins pnpm to the version in the project’s `packageManager` field:

```bash
corepack enable
corepack prepare pnpm@10.33.0 --activate
pnpm -v
```

---

## 4. Get the code

If you do not already have the project folder:

```bash
cd ~/personal/projects
git clone <YOUR_REPOSITORY_URL> my-engineer-portfolio
cd my-engineer-portfolio
```

If the repository is already on your machine, `cd` into the project root.

---

## 5. Install Portless (global)

The `pnpm dev` script invokes Portless for HTTPS on a `.localhost` domain:

```bash
npm install -g portless
portless --version
```

Documentation: [port1355.dev](https://port1355.dev)

---

## 6. Install project dependencies

From the repository root (where `package.json` lives):

```bash
pnpm install
```

On the first run, the `prepare` script may set up Husky (Git hooks); that is expected.

---

## 7. Environment variables

```bash
cp .env.example .env.local
```

Edit `.env.local` when you want real URLs, GitHub tokens, analytics, and so on. To **only run the site locally**, you can keep most values as in the example; the app runs without real credentials.

---

## 8. Start the development server

```bash
pnpm dev
```

Open in the browser: **https://leovferreira.localhost**

That host is listed in Next.js `allowedDevOrigins`. The Portless profile name (`leovferreira` in `pnpm dev`) must match the subdomain before `.localhost`. If the browser warns about the local HTTPS certificate, follow Portless or its docs to trust the development certificate.

---

## Alternative without Portless (HTTP on port 3000)

If you prefer not to use Portless or custom HTTPS:

```bash
npx next dev --port 3000
```

Then open **http://localhost:3000**.

---

## Useful commands after setup

| Command | Purpose |
| -------- | --- |
| `pnpm dev` | Development (Portless + Next) |
| `pnpm build` | Production build |
| `pnpm start` | Next server after `pnpm build` |
| `pnpm lint` | ESLint |
| `pnpm check-types` | TypeScript (`tsc --noEmit`) |

`pnpm registry:build` is only needed if you change the shadcn registry; it requires **Bun** (`npm install -g bun` or your preferred install). It is not required for day-to-day local development.

---

## Troubleshooting

- **`pnpm: command not found`**: run `corepack enable` and `corepack prepare pnpm@10.33.0 --activate` again in the same shell.
- **`portless: command not found`**: ensure global npm binaries are on your `PATH` (open a new terminal after `npm install -g portless`).
- **Wrong Node version**: run `nvm use 22` in the project directory before `pnpm install` / `pnpm dev`.
- More development workflow notes: see [DEVELOPMENT.md](./DEVELOPMENT.md).
