# Jan Kenneth Cabonilas - Portfolio

A static portfolio site (HTML, CSS, vanilla JavaScript). No backend, database or build step.

## Run locally
Open the folder in VS Code and open `index.html` in a browser. For a closer match to the live site, use the Live Server extension, or run `python -m http.server 8000` in the folder and visit http://localhost:8000. (The CV check needs a server, not a `file://` link.)

## Edit your content (all in `script.js`)
| What | Where |
|---|---|
| Email, phone, social links | `contacts` (look for `UPDATE YOUR SOCIAL MEDIA LINKS HERE`) |
| Services | `services` |
| Skills and tools | `skills`, `tools` |
| Projects | `projects` (`ADD NEW PROJECTS HERE`). Copy one block to add a project |
| Certificate | `certificate` (`ADD YOUR CERTIFICATES HERE`) |
Page text such as the About section is in `index.html`.

## Replace files
- **Profile photo:** replace `assets/profile-photo.jpg` (a photo is already included; keep it under ~200 KB, 3:4 ratio).
- **CV:** save your PDF as `assets/Jan-Kenneth-Cabonilas-CV.pdf`. Until then the button shows "available soon". Nothing else to change.
- **Project screenshots:** put images in `assets/projects/`, then set `image: "assets/projects/baogo.jpg"` for that project. Add `liveUrl`, `githubUrl`, `tech` and `status` the same way. Leave empty to hide.
- **Certificate:** put the PDF in `assets/certificates/`, then set `file` and `date` in `certificate`.
- **Photography:** add photos to `assets/projects/photography/` and use one as that project's `image`.
- **Social preview:** add a 1200x630 image `assets/og-image.jpg`.
- After deploying, replace `YOUR-SITE.pages.dev` in `robots.txt` and `sitemap.xml` with your real URL.

## GitHub (PowerShell, inside the project folder)
```powershell
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/K4RJ07/YOUR-REPO-NAME.git
git push -u origin main
```
First create an empty repository on github.com (no README) and use its URL above. If Git is already initialized, skip `git init`; if `origin` exists, skip `git remote add`. Later updates: `git add .`, `git commit -m "Describe change"`, `git push`.

GitHub stores your source code. Cloudflare Pages hosts the public website.

## Cloudflare Pages (manual upload)
These steps are from general knowledge and were not checked against Cloudflare's current docs. Cloudflare's dashboard changes, so compare with https://developers.cloudflare.com/pages/get-started/direct-upload/.
1. Sign up or log in at https://dash.cloudflare.com.
2. Go to **Workers & Pages**, then **Create**, then the **Pages** tab, then **Upload assets**.
3. Name the project (this becomes `name.pages.dev`).
4. Upload the project folder or a zip so that `index.html` is at the root, not inside a subfolder. Do not upload `.git`.
5. Click **Deploy**, then open the `pages.dev` URL shown.
6. To update: open the project, create a new deployment, and upload the updated files.
The free plan follows Cloudflare's current limits and terms.

## Troubleshooting
- **404 on the homepage:** `index.html` is inside a subfolder. Re-upload with it at the root.
- **Missing styles or images:** check file names and capitalization. They are case-sensitive.
- **CV says "available soon":** the PDF is missing or misnamed.
- **Old version showing:** hard refresh (Ctrl+Shift+R).
- **Push rejected:** the GitHub repo was created with a README. Run `git pull origin main --allow-unrelated-histories`, then push.

## Checklist
Navigation links, mobile menu, theme toggle (and persistence after reload), project detail windows, mailto and tel links, social links in a new tab, CV message, and your layout at phone and desktop widths.
