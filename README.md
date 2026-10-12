# Engineering portfolio — Mattias Eek

A static, responsive engineering portfolio with 10 projects, project case studies,
image galleries, 6 PDF academic reports, a downloadable CV, and contact links.

## Local preview

Open this folder in Visual Studio Code. Use the **Live Server** extension on `index.html`
for a realistic local preview. Alternatively, opening `index.html` directly is usually sufficient,
but a local web server is preferable for testing downloads and browser navigation.

No npm, React or build step is required.

## Edit the website

- `index.html`: hero, CV button, site content, metadata and markup.
- `styles.css`: layouts, cards, mobile styles and hover effects.
- `app.js`: `PROJECTS` data, GitHub/demo links, filtering, galleries and contact.
- `assets/project-thumbs/`: project preview images.
- `assets/project-gallery/`: images used within case studies.
- `assets/Mattias_Eek_CV.pdf`: downloadable CV linked directly from the hero.
- `reports/`: full academic reports downloadable from project case studies.

**Public source links:** The ChessAI repository is linked at
https://github.com/eekeen/ChessAI and was checked to contain C++ sources.
The FAT Sheet Builder repository is private, so the site links to the publicly
accessible app instead. Do not add private GitHub repository URLs as public source links.

## Before publishing — important permissions

Several reports are co-authored or were produced as university team work.
**Verify with all relevant co-authors and your university/sponsor that each
report, photograph, and technical diagram may be published publicly** before
uploading this full folder to a *public* repository. Also review the CV for
personal information you would rather not publish. The entire `reports/` folder
is included in this local ZIP package; GitHub Pages will expose these files to anyone.

If permission is unclear, remove the affected PDFs **and remove their links
from `PROJECTS[i].links.report` in `app.js` before making the repository public**.
The case-study interface automatically hides report buttons when this field is empty.

## GitHub Pages publishing (once permissions are confirmed)

1. Sign in to GitHub as **eekeen**.
2. Create a new repository, for example **portfolio**, and choose **Public**.
3. Upload the *contents of this folder* (`index.html`, `app.js`, `styles.css`,
   `.nojekyll`, `assets/`, `reports/`) into the **repository root** on the `main` branch.
   Do **not** upload the outer `mattias-portfolio-v9` folder as one nested directory.
4. In **Settings → Pages → Build and deployment**, choose **Deploy from a branch**;
   select `main` and `/(root)` and save.
5. After GitHub finishes deployment, visit
   `https://eekeen.github.io/portfolio/` (if you used `portfolio` as the repository name).
6. Verify CV download, all six report links, the ChessAI source-code link,
   project image zoom/lightbox, Copy Email, and mobile navigation on the live URL.

If you use a different repository name, GitHub Pages will use that name in the URL.
For a root user site, the repository must instead be named `eekeen.github.io`.

## What this version does not do

This ZIP is **not deployed** to GitHub Pages; publishing requires creating the
repository and enabling Pages. Images and academic reports are included for local
use, not evidence that their public-distribution permissions have been confirmed.
