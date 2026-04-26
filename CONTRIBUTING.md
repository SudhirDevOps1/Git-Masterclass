# Contributing Guide

First off, thank you for considering contributing to this project! 🎉

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Style Guidelines](#style-guidelines)
- [Community](#community)

## Code of Conduct

### Our Pledge

We pledge to make participation in our project a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, religion, or sexual identity and orientation.

### Our Standards

**Positive behavior includes:**
- Using welcoming and inclusive language
- Being respectful of differing viewpoints
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

**Unacceptable behavior includes:**
- Trolling, insulting comments, and personal attacks
- Public or private harassment
- Publishing others' private information without permission
- Other conduct which could reasonably be considered inappropriate

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues. When creating a bug report, include:

- **Clear title and description**
- **Steps to reproduce**
- **Expected behavior**
- **Actual behavior**
- **Screenshots if applicable**
- **Browser/Device information**

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. Include:

- **Clear title**
- **Detailed description of the suggestion**
- **Why this would be useful**
- **Possible implementation approach**

### Your First Code Contribution

Unsure where to begin? Look for issues labeled:
- `good first issue` - should only require a few lines of code
- `help wanted` - open to community contributions
- `documentation` - improvements to documentation

## Development Setup

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code recommended)
- Basic knowledge of HTML, CSS, and JavaScript
- Git installed on your machine

### Local Development

1. **Fork the repository**
   ```bash
   # Click "Fork" on GitHub, then:
   git clone https://github.com/YOUR_USERNAME/git-github-hindi-masterclass.git
   ```

2. **Navigate to the project**
   ```bash
   cd git-github-hindi-masterclass
   ```

3. **Open in browser**
   - Simply open `index.html` in your browser
   - Or use VS Code Live Server extension for hot reload

4. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

5. **Make your changes**

6. **Test thoroughly**
   - Test on multiple browsers
   - Test on mobile devices
   - Verify dark mode
   - Check all interactive features

7. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add amazing feature"
   ```

8. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

9. **Create Pull Request**
   - Go to GitHub and create a Pull Request
   - Fill in the PR template

## Pull Request Process

1. **Update documentation** for any new features
2. **Follow the commit message convention**:
   - `feat:` new feature
   - `fix:` bug fix
   - `docs:` documentation only
   - `style:` formatting, missing semicolons
   - `refactor:` code change without fix or feature
   - `test:` adding tests
   - `chore:` maintenance tasks

3. **Keep PRs focused** - one feature/fix per PR
4. **Write clear descriptions** of changes
5. **Link related issues** in PR description

### PR Checklist

- [ ] Code follows the style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No new warnings introduced
- [ ] Tested on multiple browsers
- [ ] Mobile responsive verified

## Style Guidelines

### HTML
- Use semantic HTML elements
- Include ARIA labels for accessibility
- Maintain proper indentation (2 spaces)
- Add comments for major sections

### CSS
- Follow BEM naming where applicable
- Use CSS variables for theming
- Mobile-first responsive design
- Support dark mode

### JavaScript
- Use vanilla JavaScript (no frameworks required)
- Add comments for complex logic
- Handle errors gracefully
- Ensure keyboard accessibility

### Content
- Write in Hindi primarily
- Include English terms in parentheses where helpful
- Keep explanations simple and beginner-friendly
- Add real-world examples

## Project Structure

```
git-github-hindi-masterclass/
├── index.html          # Main single-page application
├── styles.css          # Additional styles
├── script.js           # Additional JavaScript
├── manifest.json       # PWA manifest
├── sw.js               # Service worker
├── privacy.html        # Privacy policy
├── robots.txt          # SEO
├── sitemap.xml         # Sitemap
├── README.md           # Documentation
├── CHANGELOG.md        # Version history
├── CONTRIBUTING.md     # This file
├── LICENSE             # MIT License
├── data.json           # App metadata
└── .github/
    └── workflows/
        └── deploy.yml  # CI/CD workflow
```

## Community

- 💬 **Discord**: [Join our community](https://discord.gg/yourinvite)
- ✈️ **Telegram**: [@yourchannel](https://t.me/yourchannel)
- 🗣️ **GitHub Discussions**: [Start a discussion](https://github.com/your-username/git-github-hindi-masterclass/discussions)

## Recognition

Contributors will be:
- Listed in README.md
- Mentioned in CHANGELOG.md
- Credited in release notes

## Questions?

Feel free to:
- Open an issue for bugs/suggestions
- Start a discussion for questions
- Email: your-email@example.com

---

**Thank you for helping make Git education accessible to Hindi speakers! 🙏**
