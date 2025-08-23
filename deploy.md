# 🚀 Panduan Deploy ke GitHub & Netlify

## 📋 Cara Upload ke GitHub

### 1. Inisialisasi Git Repository
```bash
git init
git add .
git commit -m "Initial commit - Villa Glamping Tawangmangu Website"
```

### 2. Buat Repository di GitHub
- Buka https://github.com/new
- Beri nama repository (contoh: `villa-tawangmangu`)
- Pilih "Public" atau "Private"
- Jangan centang "Initialize with README"
- Klik "Create Repository"

### 3. Connect ke GitHub
```bash
git remote add origin https://github.com/USERNAME/REPOSITORY-NAME.git
git branch -M main
git push -u origin main
```

## 🌐 Deploy ke Netlify

### Opsi 1: Deploy via GitHub (Recommended)
1. Login ke https://netlify.com
2. Klik "New site from Git"
3. Pilih GitHub dan authorize
4. Pilih repository Anda
5. Configuration akan otomatis terdeteksi dari `netlify.toml`
6. Klik "Deploy site"

### Opsi 2: Deploy Manual
1. Run `npm run build` di komputer Anda
2. Buka https://netlify.com
3. Drag folder `dist/public` ke Netlify dashboard
4. Website langsung live!

## 🔧 Environment Variables (Jika Diperlukan)
Jika website membutuhkan API keys atau database connection:
1. Di Netlify dashboard → Site Settings → Environment Variables
2. Tambahkan variables seperti:
   - `DATABASE_URL`
   - `API_KEY`
   - dll

## 📝 Update Website
Setelah setup GitHub + Netlify:
1. Edit file-file di komputer
2. Git commit & push:
   ```bash
   git add .
   git commit -m "Update konten website"
   git push
   ```
3. Netlify otomatis build & deploy versi terbaru!

## 🔗 Custom Domain (Opsional)
1. Di Netlify dashboard → Domain settings
2. Add custom domain
3. Update DNS settings domain Anda
4. SSL certificate otomatis aktif