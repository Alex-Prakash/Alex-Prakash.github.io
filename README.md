# Minimalist Jekyll Theme

A clean, modern, and distraction-free Jekyll theme designed for personal blogs on GitHub Pages.

## Features

- **Minimalist Design**: Typography-focused with plenty of whitespace.
- **Responsive**: Mobile-first design that looks great on all devices.
- **Dark Mode Support**: Automatically respects system preferences.
- **Fast**: No JavaScript frameworks or heavy dependencies.
- **SEO Friendly**: Basic meta tags and semantic HTML.

## Installation

1.  Copy the following files/folders to your Jekyll project:
    - `_config.yml`
    - `_layouts/`
    - `assets/`
    - `_posts/`
    - `index.md`
    - `about.md`

2.  If you are starting from scratch on GitHub Pages:
    - Create a new repository `username.github.io`.
    - Upload these files.
    - Enable GitHub Pages in the repository settings (Source: GitHub Actions or from a branch).

## Customization

### Configuration

Edit `_config.yml` to update your site details:

```yaml
title: Your Blog Title
email: your-email@example.com
description: Your blog description.
```

### Colors and Fonts

Edit `assets/css/style.css` to change the CSS variables:

```css
:root {
  --link-color: #0066cc; /* Change accent color */
  --font-sans: "Your Favorite Font", sans-serif;
}
```

### Adding Posts

Create new markdown files in `_posts/` with the format `YYYY-MM-DD-title.md`.

## License

MIT
