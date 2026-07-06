# ⚡ TaskFlow — Premium Task Manager

<div align="center">

![TaskFlow Banner](https://img.shields.io/badge/TaskFlow-Premium%20Task%20Manager-6366f1?style=for-the-badge&logo=lightning&logoColor=white)

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square)

**A sleek, dark-mode task manager with alarms, a Pomodoro timer, calendar, and more — built with pure HTML, CSS & JavaScript.**

[🚀 Open App](#-getting-started) · [✨ Features](#-features) · [📁 Project Structure](#-project-structure) · [🤝 Contributing](#-contributing)

</div>

---

## 📸 Preview

> Open `index.html` in your browser to see the full experience.

| Page | Description |
|------|-------------|
| 🏠 **Home** | Animated hero landing page with stats and feature showcase |
| ✅ **Tasks** | Full task manager with priorities, tags, alarms and Pomodoro |
| 📅 **Calendar** | Monthly view with color-coded task dots per day |
| 🔑 **Auth** | Glassmorphism sign in / sign up with validation |
| 💎 **Pricing** | Tiered pricing cards with FAQ accordion |
| ℹ️ **About** | Team, mission, and story timeline |

---

## ✨ Features

### ✅ Task Management
- Create tasks with **priority levels** (🔴 High · 🟡 Medium · 🟢 Low)
- Assign **tags** — Work, Personal, Urgent, Learning, Others
- Set **due dates** — overdue tasks are highlighted automatically
- **Search**, **filter by status/tag**, and **sort** (Date / Priority / A–Z)
- Real-time **progress bar** and **stats** (Total, Done, Pending, Overdue)
- Smooth **add/delete animations** on every task card

### 🔔 Alarm System
- Set an **alarm time** on any task when creating it
- **Browser notification** pops up at the set time (permission-based)
- **Chime sound** plays via Web Audio API — no external files needed
- Animated **ringing bell toast** appears on screen
- **Upcoming Alarms panel** in sidebar shows all pending alarms
- Remove alarms individually with the 🔕 button

### 🍅 Pomodoro Timer
- Three modes — **Focus (25m)**, **Short Break (5m)**, **Long Break (15m)**
- Beautiful **circular SVG progress ring** with gradient stroke
- Pause / Resume / Reset controls
- Session counter tracks completed focus sessions
- Notification + beep when session ends

### 📅 Calendar
- Full **monthly grid** with previous/next month navigation
- **Color-coded dots** per day showing task tags
- Today's date highlighted with a **glow ring**
- Click any day to open a **task panel** to view, add, complete, or delete tasks

### 📝 Quick Notes
- Always-visible notepad in the sidebar
- **Auto-saves** to localStorage with a "✓ Saved" indicator

### 🎨 Premium Dark UI
- **Dark slate** background with **indigo/violet** gradient accents
- **Glassmorphism** cards with blur backdrops
- **Inter** font via Google Fonts
- Smooth CSS transitions and **entrance animations** on every page
- Fully **responsive** — sidebar collapses on mobile

### 🔐 Auth Pages
- **Sign Up** with password strength indicator and real-time validation
- **Sign In** with eye toggle, "Remember Me", and loading state
- Plan badge shown on signup when coming from Pricing page
- Auth stored in `localStorage` (demo mode)

---

## 🛠️ Tech Stack

| Technology | Usage |
|-----------|-------|
| **HTML5** | Semantic page structure |
| **Vanilla CSS** | Custom design system (`style.css`) with CSS variables |
| **Vanilla JavaScript** | All interactivity, no frameworks |
| **Web Storage API** | `localStorage` for tasks, notes, auth |
| **Web Notifications API** | Browser alarm notifications |
| **Web Audio API** | Alarm chime sound (no audio files) |
| **Google Fonts** | Inter typeface |

> 🚫 **No frameworks. No dependencies. No build step.** Just open and use.

---

## 📁 Project Structure

```
TeamprojectJS/
│
├── index.html        🏠  Landing / Home page
├── todo.html         ✅  Main Task Manager (alarms, Pomodoro, notes)
├── calendar.html     📅  Monthly Calendar view
├── signin.html       🔑  Sign In page
├── signup.html       🚀  Sign Up page
├── about.html        ℹ️   About page (team, mission, timeline)
├── pricing.html      💎  Pricing plans with FAQ
│
├── style.css         🎨  Global design system (shared by all pages)
└── nav.js            🔗  Shared sidebar navigation + toast utility
```

---

## 🚀 Getting Started

No installation needed. No server required.

### Option 1 — Just double-click
```
1. Download or clone this repo
2. Open the folder
3. Double-click  index.html
4. Done!
```

### Option 2 — Clone via Git
```bash
git clone https://github.com/YOUR_USERNAME/taskflow.git
cd taskflow
# Open index.html in your browser
```

### Option 3 — VS Code Live Server
```
1. Open folder in VS Code
2. Install the "Live Server" extension
3. Right-click index.html → "Open with Live Server"
```

---

## 📖 How to Use

### Adding a Task with an Alarm
1. Open **`todo.html`**
2. Type your task in the input box
3. Select a **tag**, **priority**, and optional **due date**
4. Pick an **⏰ alarm time** using the time picker
5. Click **+ Add Task**
6. Click **"Enable Alerts"** in the Alarms panel to allow browser notifications

### Using the Pomodoro Timer
1. Pick a mode: **Focus 25m / Short 5m / Long 15m**
2. Click **▶ Start**
3. A chime + notification fires when the session ends
4. Your session count is tracked automatically

### Using the Calendar
1. Open **`calendar.html`**
2. Click **‹ ›** to navigate months
3. Click any day to open the task panel
4. Add, complete, or delete tasks for that specific day

---

## 🗺️ Roadmap

- [x] Task management with priorities and tags
- [x] Alarm system with browser notifications and sound
- [x] Pomodoro timer with circular progress ring
- [x] Calendar with color-coded task dots
- [x] Quick Notes with autosave
- [x] Dark glassmorphism UI
- [x] Sign In / Sign Up flow
- [ ] Cloud sync / backend integration
- [ ] Team collaboration mode
- [ ] Drag-and-drop task reordering
- [ ] AI-powered task scheduling
- [ ] Mobile app (PWA)

---

## 🤝 Contributing

Contributions are welcome! Here's how:

```bash
# 1. Fork the repo
# 2. Create your feature branch
git checkout -b feature/amazing-feature

# 3. Commit your changes
git commit -m "Add amazing feature"

# 4. Push to the branch
git push origin feature/amazing-feature

# 5. Open a Pull Request
```

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 👥 Team

| Name | Role |
|------|------|
| **Alex Johnson** | Founder & Designer |
| **Mia Patel** | Lead Developer |
| **Sam Kim** | Product Manager |

---

<div align="center">

Made with ❤️ and lots of ☕

⭐ **Star this repo** if you found it useful!

</div>
