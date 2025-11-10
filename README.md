# Lingyu Zhang's Academic Website

Personal webpage adapted from Jon Barron's public academic website: https://jonbarron.info/

## 🚀 Quick Start: Adding a New Paper

**Want to add a paper? It's super easy now!**

1. Open `papers.js`
2. Copy an existing paper entry
3. Fill in your paper's information
4. Put your image in the `images/` folder
5. Refresh your browser

**That's it!** 🎉

For detailed instructions, see:
- **`QUICK_START.md`** - 30-second guide (start here!)
- **`CHEATSHEET.md`** - Quick reference with examples
- **`HOW_TO_ADD_PAPERS.md`** - Comprehensive documentation
- **`PAPER_TEMPLATE.js`** - Copy-paste templates

## 📁 File Structure

```
├── index.html              # Main website HTML
├── papers.js              # YOUR PAPERS GO HERE ← ADD PAPERS HERE
├── stylesheet.css         # Website styling
├── images/                # Paper thumbnails and images
├── data/                  # PDFs and other documents
├── QUICK_START.md        # Quick guide to adding papers
├── CHEATSHEET.md         # Quick reference
├── HOW_TO_ADD_PAPERS.md  # Detailed documentation
└── PAPER_TEMPLATE.js     # Templates to copy
```

## ✨ Features

- ✅ **Modular paper system** - Add papers by editing one simple file
- ✅ **Automatic HTML generation** - No need to write HTML
- ✅ **Hover effects** - Support for images, GIFs, and videos
- ✅ **Responsive design** - Looks great on all devices
- ✅ **Easy to maintain** - Clean, organized code

## 🎯 Common Tasks

### Add a New Paper
See `QUICK_START.md` or edit `papers.js`

### Change Paper Order
In `papers.js`, move papers around in the array (newest first)

### Update Styling
Edit `stylesheet.css`

### Update Profile Info
Edit the profile section in `index.html`

## 📚 Documentation

| File | Purpose | When to Use |
|------|---------|-------------|
| `QUICK_START.md` | Fast guide | Adding a paper quickly |
| `CHEATSHEET.md` | Quick reference | Need syntax reminder |
| `HOW_TO_ADD_PAPERS.md` | Full guide | Understanding all options |
| `PAPER_TEMPLATE.js` | Templates | Need something to copy |
| `MODULAR_SYSTEM_SUMMARY.md` | Overview | Understanding the system |

## 🛠️ Maintenance

### Adding a Paper
```javascript
// In papers.js, add at the top of the papers array:
{
  id: "mypaper",
  title: "My Paper Title",
  authors: [{ name: "Your Name", highlight: true }],
  venue: "Conference 2025",
  image: "images/mypaper.jpg",
  links: [{ type: "arxiv", url: "https://..." }],
  description: "What your paper does..."
},
```

### Updating Existing Paper
Just find it in `papers.js` and edit the fields

### Removing a Paper
Delete its entry from the `papers` array in `papers.js`

## 🎨 Customization

The website uses a clean modular structure:
- **Content**: `papers.js` (paper data)
- **Structure**: `index.html` (layout)
- **Styling**: `stylesheet.css` (appearance)

## 🐛 Troubleshooting

**Paper not showing?**
- Open browser console (F12) for errors
- Check commas in `papers.js`
- Verify image path

**Styling issues?**
- Check `stylesheet.css`
- Clear browser cache

**More help?**
- See `HOW_TO_ADD_PAPERS.md` troubleshooting section

## 📝 Credits

- Template: [Jon Barron's website](https://jonbarron.info/)
- Modular system: Custom implementation for easy maintenance