# ⚡ TaskFlow — Premium Task Workspace

TaskFlow is a premium, framework-free personal productivity workspace designed for entering and maintaining flow state. Built using pure HTML, Vanilla CSS, and modern JavaScript, it combines structured task planning, a Pomodoro focus engine, scheduling, and alarms into a unified interface.

---

### 🔗 [Live Demo (Click Here to Open App)](https://manoj4681.github.io/TaskFlow/) 🚀

---

## 📋 Table of Contents
* [✨ Features & How they Work](#-features--how-they-work)
* [🛠️ Tech Stack & Web APIs Used](#%EF%B8%8F-tech-stack--web-apis-used)
* [📁 Project Architecture](#-project-architecture)
* [🚀 How to Run Locally](#-how-to-run-locally)
* [🌐 How to Host Live on GitHub Pages](#-how-to-host-live-on-github-pages)

---

## ✨ Features & How they Work

### 🏠 1. Flow-State Landing Page (`index.html`)
An elegant dark-mode home interface featuring gradient-highlighted typography, interactive statistic tracking, and responsive feature grids.
* **How it works:** Uses CSS custom variables and entrance keyframe animations to guide the user's eyes. It features an automated count-up script that dynamically animates stats when scrolled into view.

### ✅ 2. Deep Work Workspace (`todo.html`)
The core productivity dashboard, integrating task sorting, tags, priority matrices, progress tracking, and custom utilities in a multi-panel layout.
* **How it works:** Reads and writes task objects directly to browser memory. You can add tasks, set custom due dates, choose tags (Work, Personal, Urgent, Learning), and assign priority weights (High 🔴, Medium 🟡, Low 🟢).

### 🔔 3. Smart Alarm & Notification System
Set localized alert times directly on your tasks to trigger native system notifications and chimes.
* **How it works:** When a task alarm time arrives, the app queries the browser's audio context to play a custom synthesizer chord and triggers a native OS desktop notification pop-up.

### 🍅 4. Pomodoro Focus Timer
An interactive focus cycle engine (Focus, Short Break, Long Break) with a responsive circular progress ring.
* **How it works:** Native Javascript intervals decrement the timer while mathematically calculating and updating the CSS `stroke-dashoffset` property on a vector SVG circle to create a smooth, glowing progress ring.

### 📅 5. Monthly Calendar Planner (`calendar.html`)
A monthly scheduler showing your workload at a glance.
* **How it works:** Generates a custom calendar grid using CSS Grid dynamically based on the selected month/year. Days containing tasks automatically display color-coded priority dots.

### 📝 6. Quick Scratchpad Notes
An always-accessible sidebar notepad.
* **How it works:** Listens to keyboard inputs in real-time, auto-saving text to local storage with a visual delay saving confirmation checkmark.

### 🔐 7. Glassmorphic Auth Portal (`signin.html` / `signup.html`)
A premium user entry interface featuring soft backdrop-blur card layers, interactive input validation, and real-time password strength assessment.
* **How it works:** Uses the CSS `backdrop-filter` property to blur the background elements behind the card. Real-time form listeners analyze password entropy (length, characters, symbols) and update a colored strength bar.

---

## 🛠️ Tech Stack & Web APIs Used

* **Frontend Structure:** HTML5 (Semantic elements)
* **Custom Layouts:** Vanilla CSS3 (CSS Variables, Flexbox, Grid Layout, Transitions, keyframe animations, and `backdrop-filter` blur)
* **Logic:** Vanilla JavaScript (ES6+, DOM Manipulation, Event Listeners, and mathematical calculation engines)
* **Data Persistence:** Web Storage API (`localStorage` for storing tasks, notes, credentials, and settings offline)
* **Sound Synthesizer:** Web Audio API (Generates real-time sound frequencies/oscillators for alarm chimes without requiring external `.mp3` audio files)
* **System Alerts:** Web Notifications API (Triggers native desktop notifications across screen layers)

---

## 📁 Project Architecture
