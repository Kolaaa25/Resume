# Mykola Matekha - Neon Portfolio

A stunning, modern portfolio website built with React and Bootstrap featuring a dark neon tech aesthetic with smooth animations.

## ✨ Features

- 🎨 **Dark Neon Tech Design** - Soft cold blue and neon red accents
- ⚡ **Smooth Animations** - Scroll-triggered fade-ins, slide-ups, and floating effects
- 🔄 **Animated Loader** - Circular neon progress loader with percentage counter
- 🎭 **Welcome Animation** - Letter-by-letter fade-in with neon glow
- 🛠 **Animated SVG Icons** - Custom neon-styled skill icons
- 📱 **Fully Responsive** - Works beautifully on all devices
- 🌐 **API Integration** - Fetches project data from backend
- 🎯 **Modular Components** - Clean, maintainable code structure

## 🚀 Quick Start

### Frontend (React)

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

### Backend (Express)

```bash
# Navigate to server folder
cd server

# Install dependencies
npm install

# Start server
npm start
```

## 📁 Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Loader/
│   │   ├── WelcomeAnimation/
│   │   ├── Hero/
│   │   ├── Skills/
│   │   ├── Projects/
│   │   ├── Certificates/
│   │   ├── Footer/
│   │   └── FloatingElements/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── server/
│   ├── server.js
│   └── package.json
├── vercel.json
└── package.json
```

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Background | `#0a0a0a` | Main dark background |
| Primary | `#7db8e8` | Soft cold blue |
| Accent | `#ff3366` | Neon red highlights |
| Neon Blue | `#00d4ff` | Glow effects |
| Text Primary | `#e6f1ff` | Main text |
| Text Secondary | `#a8c5e2` | Subtle text |

## 🌐 Deployment

### Frontend (Vercel)

1. Push code to GitHub
2. Connect repository to Vercel
3. Set environment variable: `REACT_APP_API_URL=your-render-backend-url`
4. Deploy

### Backend (Render)

1. Create new Web Service on Render
2. Connect to GitHub repository
3. Set root directory to `server`
4. Build command: `npm install`
5. Start command: `npm start`
6. Deploy

## 🛠 Technologies

- **Frontend**: React, Bootstrap, React-Bootstrap
- **Backend**: Express, Node.js
- **HTTP Client**: Axios
- **Styling**: CSS3 with custom properties
- **Fonts**: Inter (Google Fonts)
- **Animations**: CSS keyframes, transitions

## 📧 Contact

- **Email**: matehakola@gmail.com

## 📝 License

This project is open source and available under the MIT License.

---

Made with ♥ by Mykola Matekha
