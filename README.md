# Betaway Holdings Website

Static website for Betaway Holdings: real estate sales, management, leasing, and rentals.

## Files

- `index.html` - main website page
- `styles.css` - responsive styling
- `script.js` - mobile navigation and footer year
- `assets/logo.jpg` - primary logo
- `assets/logo-dark.jpg` - dark-background logo version

## GitHub Pages Setup

1. Create a new GitHub repository.
2. Upload these files to the repository root.
3. Go to **Settings → Pages**.
4. Set source to the main branch.
5. Add the custom domain: `betawayholdings.com`.
6. In GoDaddy DNS, point the domain to GitHub Pages.

### GoDaddy DNS Records

For the root domain:

```txt
A @ 185.199.108.153
A @ 185.199.109.153
A @ 185.199.110.153
A @ 185.199.111.153
```

For www:

```txt
CNAME www YOUR-GITHUB-USERNAME.github.io
```

Replace `YOUR-GITHUB-USERNAME` with the actual GitHub username or organization.
