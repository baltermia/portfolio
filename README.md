# Portfolio Website

A collection of modern, responsive portfolio website designs for a .NET and C++ developer. Choose from 2 beautiful themes with dark/light mode support!

## 🎨 Design Options

This portfolio includes **2 different design themes** that both use the same `config.js` file and include dark/light mode toggles:

1. **Modern Minimalist** (`design-minimalist.html`) - Clean design with Tailwind CSS, featuring light/dark mode toggle
2. **Bento Grid** (`design-bento.html`) - Modern card-based layout with iOS-inspired design and light/dark mode toggle

👉 **[View Theme Gallery](themes.html)** - Browse and switch between available designs

## 🌟 Features

- **2 Beautiful Themes**: Modern Minimalist and Bento Grid designs
- **Dark/Light Mode**: Both themes include toggles for dark and light color schemes
- **Single Data Source**: Both themes use the same `config.js` file - edit once, update everywhere
- **Modern Technologies**: Tailwind CSS and advanced CSS Grid
- **Fully Responsive**: All designs work perfectly on desktop, tablet, and mobile devices
- **Smooth Animations**: Engaging scroll animations and transitions
- **Easy Customization**: All content managed through a single config file
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

## 🎨 Design Themes Explained

### 1. Modern Minimalist (design-minimalist.html)
- **Style**: Clean, elegant design with light/dark modes
- **Technologies**: Tailwind CSS
- **Best for**: Modern, clean aesthetic lovers
- **Features**: Typography-focused, whitespace emphasis, gradient buttons, dark/light mode toggle

### 2. Bento Grid (design-bento.html)
- **Style**: Modern card-based layout with light/dark modes
- **Technologies**: Advanced CSS Grid
- **Best for**: iOS/modern design enthusiasts
- **Features**: Glassmorphism, interactive cards, smooth transitions, dark/light mode toggle

## 🎨 Color Scheme

Both themes use a professional color palette focused on .NET and C++ branding:

- **Primary (Purple)**: `#512BD4` - Represents .NET
- **Secondary (Blue)**: `#00599C` - Represents C++
- **Accent**: `#0078D7` - Microsoft blue

Both themes support both light and dark color schemes with a toggle button.

## 📱 Responsive Design

Both themes are fully responsive and work on:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🛠️ Technology Stack

Different themes use different technologies to showcase modern web development:

- **Modern Minimalist**: Tailwind CSS (CDN) with dark mode support
- **Bento Grid**: Advanced CSS Grid with CSS variables for theming

Both themes use:
- **Google Fonts**: Inter
- **Single Data Source**: `config.js`

## 📄 File Structure

```
portfolio/
├── design-minimalist.html  # Modern Minimalist theme
├── design-bento.html       # Bento Grid theme
├── themes.html             # Theme gallery/switcher
├── config.js               # Shared data for all themes
├── .gitignore              # Git ignore file
└── README.md               # This file
```

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 💡 Tips

1. **Choose your theme**: Visit `themes.html` to see both designs and pick your favorite
2. **Toggle dark/light mode**: Both themes have a toggle button in the top-right corner
3. **Single source of truth**: Edit `config.js` once to update both themes
4. **Keep it updated**: Regularly update your projects and experience
5. **Add real links**: Replace placeholder `#` links with actual URLs
6. **Optimize images**: If you add images, optimize them for web
7. **Test both modes**: Check each design in both light and dark mode on different devices
8. **Use analytics**: Consider adding Google Analytics to track visitors

## 🎯 Which Theme Should I Choose?

- **For clean, modern look**: Modern Minimalist
- **For iOS-inspired design**: Bento Grid
- **Not sure?**: Host both and let visitors choose via `themes.html`!

## 🚀 Deploying Your Portfolio

You can deploy to GitHub Pages:

1. Set `themes.html` as your landing page, or
2. Choose one theme as your main page and rename it to `index.html`, or
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

---

**Built with ❤️ for .NET and C++ developers**
