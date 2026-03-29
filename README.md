# Kargo Montacargas — Odoo Theme CDN

Static CSS/JS assets for the Kargo Montacargas Odoo SaaS instance, served via GitHub Pages as a CDN.

## Purpose

Odoo SaaS charges per Lines of Code (LoC) for custom code injected into the platform. By externalizing the theme's CSS and JavaScript to a CDN, the LoC footprint inside Odoo is reduced from **~5,700 lines to ~10 lines** — a single `<link>` and `<script>` tag replacing thousands of lines of inline code.

## Files

| File | Description | Lines |
|------|-------------|-------|
| `theme.css` | Consolidated dark theme, fleet design system, home menu, and input styles | 5,567 |
| `theme.js` | Mobile navigation helpers and numeric input validation guard | 391 |

## Architecture

```
Odoo SaaS (kargomontacargas.odoo.com)
  └─ QWeb View (ir.ui.view ID 2237)
       └─ <link href="https://zamaniego.github.io/kargo-odoo-theme/theme.css">
       └─ <script src="https://zamaniego.github.io/kargo-odoo-theme/theme.js">
                          │
          GitHub Pages CDN ◄──── This repository
```

## Source Files Consolidated

The theme files were extracted and consolidated from multiple Odoo customization points:

- **QWeb View 2237** (`kargo_theme.webclient_bootstrap`) — Main dark theme with Material Dark + Kargo Brand + Apple HIG Mobile + WCAG AAA compliance
- **ir.asset ID 13** — Dark theme override (`web.assets_web_dark`)
- **ir.asset ID 14** — Fleet design system (`web.assets_backend`)
- **ir.asset ID 15** — Fleet dark overrides (`web.assets_web_dark`)
- **ir.asset ID 12** — Home menu CSS (`web.assets_backend`)
- **ir.asset ID 10** — Numeric input guard JS (`web.assets_backend`)
- **Attachment 812** — Input visibility CSS

## Updating the Theme

1. Edit `theme.css` or `theme.js` in this repository
2. Commit and push to `main`
3. GitHub Pages will redeploy automatically (~30 seconds)
4. In Odoo, clear browser cache with `Ctrl+Shift+R`

No changes needed in Odoo itself — the `<link>` and `<script>` tags always point to the latest version on `main`.

## Rollback

If the CDN is unreachable or the theme breaks, the original inline code can be restored to Odoo's QWeb view via the XML-RPC API. Contact the Aumentra team for the rollback script.

## Cache

GitHub Pages serves files with standard caching. To force a refresh in Odoo after an update, append a version query string to the URLs in the QWeb view:

```xml
<link rel="stylesheet" href="https://zamaniego.github.io/kargo-odoo-theme/theme.css?v=2"/>
```

---

Maintained by [Aumentra](https://aumentra.com) for Kargo Montacargas.
