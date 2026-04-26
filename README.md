# CLaRA-AI Frontend Prototype

Prototype dashboard enterprise healthcare untuk **CLaRA-AI — Clinical & Risk-Aware Audit AI for BPJS**.

## Tech Stack
- React + Vite
- Tailwind CSS
- React Router
- Recharts
- Lucide React

## Menjalankan Lokal
```bash
npm install
npm run dev
```

Akses di `http://localhost:5173`.

## Build Produksi
```bash
npm run build
npm run preview
```

## Deploy ke Vercel
1. Push repository ke Git provider (GitHub/GitLab/Bitbucket).
2. Import project di Vercel.
3. Framework preset: **Vite**.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Deploy.

`vercel.json` sudah disediakan untuk SPA rewrite agar semua route React Router bekerja.

## Routing
- `/`
- `/dashboard`
- `/claims/:id`
- `/clinical-compliance`
- `/fraud-analytics`
- `/room-integrity`
- `/audit-assistant`
- `/simulation`
