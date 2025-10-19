This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# Edgestore Integration & Resizable Layout Demo

This project is a dedicated technical demonstration built in Next.js, featuring a clean, two-column, resizable user interface for file management using Edgestore.dev for storage and URL retrieval.

The primary goal of this application was to replicate the exact visual layout provided while demonstrating secure, efficient cloud file handling.

## 🚀 Features & Technical Highlights

**Edgestore Integration:** Fully integrated with Edgestore.dev to handle the entire file upload lifecycle, from selection to secure storage and URL generation.

**Two-Column Layout:** Implements a precise two-column design, with distinct sections for the upload form and the download/URL display.

**Resizable Blocks:** The application uses modern CSS techniques to ensure the content blocks are fully responsive and resizable, honoring the requirement for flexible workspace viewing.

**Aesthetic & Components:** Built using shadcn/ui components for a highly polished, accessible, and production-ready user interface.

**Rapid Development:** This proof-of-concept was developed and delivered within the strict 24-hour deadline.

**Secure URL Display:** Once uploaded, the direct, secure URL for the file is immediately displayed, allowing for quick sharing or downloading.

## 💻 Technology Stack

**Framework:** Next.js 14 (App Router)

**Styling:** Tailwind CSS

**UI Library:** shadcn/ui

**Cloud Storage:** Edgestore.dev

**Language:** TypeScript

**State Management:** React Hooks (useState, useCallback)

## 🛠️ Setup and Installation

**1. Clone the repository**
```bash
git clone [YOUR_GITHUB_REPO_URL_HERE]
cd AskJunior
```

**2. Install dependencies**
```bash
npm install
# or
yarn install
```

**3. Configure Edgestore Credentials**

You need to set up your Edgestore account and environment variables.

Sign up for Edgestore.dev.

Configure your file storage environment.

Add the following environment variables to a .env.local file in the root of the project:

```bash
# Edgestore credentials (required for server-side initialization)
EDGE_STORE_ACCESS_KEY=[YOUR_EDGE_STORE_ACCESS_KEY]
EDGE_STORE_SECRET_KEY=[YOUR_EDGE_STORE_SECRET_KEY]
```

**4. Run the development server**
```bash
npm run dev
# or
yarn dev
```

**Open http://localhost:3000 with your browser to see the result.**



