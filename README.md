# Portfolio Website

A modern, responsive portfolio website for a .NET and C++ developer with dark/light mode support.

## 🌟 Features

- **Modern Minimalist Design**: Clean, elegant design with Tailwind CSS
- **Dark/Light Mode**: Toggle between dark and light color schemes with preference persistence
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations**: Engaging scroll animations and transitions
- **Easy Customization**: All content managed through a single `config.js` file
- **GitHub Pages Ready**: Optimized for free hosting on GitHub Pages
- **Performance Optimized**: Fast loading with minimal dependencies
- **Accessible**: Semantic HTML and keyboard navigation support

## 🚀 Quick Start

### 1. Customize Your Content

Edit the `config.js` file to add your personal information:

```javascript
const CONFIG = {
    name: "Your Name",
    bio: "Your bio text...",
    // ... update all fields
};
```

**What to update in config.js:**
- `name`: Your full name
- `bio`: Short bio for the hero section
- `aboutDescription`: Longer description about yourself
- `projects`: Array of your projects with details
- `experience`: Array of your work experience
- `contact`: Your social media and contact links

### 2. Test Locally

Open `index.html` in your web browser to preview the site locally.

Or use a simple local server:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (if you have npx)
npx http-server

# PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## 📦 Deploy to GitHub Pages

### Option 1: Automatic Deployment (Recommended)

1. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click on **Settings** → **Pages**
   - Under **Source**, select the branch you want to deploy (e.g., `main` or `copilot/create-portfolio-website`)
   - Click **Save**

2. **Wait for deployment:**
   - GitHub will automatically build and deploy your site
   - Your site will be available at: `https://[your-username].github.io/portfolio`

3. **Access your site:**
   - After a few minutes, your portfolio will be live!
   - The URL will be: `https://[your-username].github.io/portfolio`

### Option 2: Custom Domain (Optional)

1. Add a `CNAME` file to your repository with your custom domain:
   ```
   yourdomain.com
   ```

2. Configure DNS settings with your domain provider:
   - Add a CNAME record pointing to `[your-username].github.io`

3. Update GitHub Pages settings to use your custom domain

### Option 3: GitHub Actions Deployment

Create `.github/workflows/deploy.yml` for automated deployment:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./
```

## 📝 Customization Guide

### Adding New Projects

In `config.js`, add to the `projects` array:

```javascript
{
    title: "Your Project Name",
    description: "Brief description of what the project does",
    technologies: ["C#", "ASP.NET", "SQL Server"],
    github: "https://github.com/username/repo",
    demo: "https://your-demo-url.com"
}
```

### Adding Work Experience

In `config.js`, add to the `experience` array:

```javascript
{
    title: "Senior .NET Developer",
    company: "Company Name",
    period: "Jan 2020 - Present",
    description: "What you did at this company..."
}
```

### Updating Contact Links

In `config.js`, update the `contact` array:

```javascript
{
    name: "GitHub",
    url: "https://github.com/your-username",
    icon: "📦"
}
```

### Changing Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --primary-color: #512BD4;  /* .NET purple */
    --secondary-color: #00599C; /* C++ blue */
    /* ... other colors */
}
```

## 🎨 Design

The Modern Minimalist design features:
- **Style**: Clean, elegant design with light and dark modes
- **Technologies**: Tailwind CSS (CDN) with dark mode support
- **Features**: Typography-focused, whitespace emphasis, gradient buttons, smooth transitions

## 🎨 Color Scheme

The portfolio uses a professional color palette focused on .NET and C++ branding:

- **Primary (Purple)**: `#512BD4` - Represents .NET
- **Secondary (Blue)**: `#00599C` - Represents C++
- **Accent**: `#0078D7` - Microsoft blue

The design supports both light and dark color schemes with a toggle button in the top-right corner.

## 📱 Responsive Design

Fully responsive and works on:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🛠️ Technology Stack

- **Tailwind CSS**: Utility-first CSS framework via CDN
- **Vanilla JavaScript**: For theme toggling and dynamic content
- **Google Fonts**: Inter font family
- **LocalStorage**: Persists theme preference

## 📄 File Structure

```
portfolio/
├── index.html    # Main portfolio page
├── config.js     # Content configuration
├── .gitignore    # Git ignore file
└── README.md     # This file
```

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 💡 Tips

1. **Toggle dark/light mode**: Use the button in the top-right corner
2. **Edit once**: Update `config.js` to change all content
3. **Keep it updated**: Regularly update your projects and experience
4. **Add real links**: Replace placeholder `#` links with actual URLs
5. **Optimize images**: If you add images, optimize them for web
6. **Test both modes**: Check the design in both light and dark mode on different devices
7. **Use analytics**: Consider adding Google Analytics to track visitors

## 🚀 Deploying to GitHub Pages

1. Push your changes to the main branch
2. Go to repository Settings → Pages
3. Select the branch to deploy (usually `main`)
4. Your portfolio will be available at `https://[username].github.io/[repository]`
3. Deploy both themes and link to them in your resume/LinkedIn

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available under the MIT License.

## 🎯 Next Steps

1. Update `config.js` with your personal information
2. Replace placeholder project data with your actual projects
3. Add your real GitHub, LinkedIn, and other social links
4. Deploy to GitHub Pages
5. Share your portfolio with the world!

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ for .NET and C++ developers**
