# 📸 Media Capture Studio

> Real-time video & image snapshot capture app with a live REST API backend.
> Built by **Nyarambe Elnabas Eugine** | Software Engineer | Kenya 🇰🇪

[![IELTS](https://img.shields.io/badge/IELTS-7.5%20C1-blue)](https://ielts.org)
[![Moringa](https://img.shields.io/badge/Moringa%20School-Software%20Engineer-green)](https://moringaschool.com)
[![License](https://img.shields.io/badge/license-MIT-yellow)](LICENSE)

---

## 🚀 Features

- 📸 **Live Camera Feed** — access front & back cameras
- 🖼️ **Instant Snapshots** — capture PNG images from live video
- 🎬 **Video Recording** — record WebM videos with audio
- 💾 **Download Media** — save snapshots and recordings locally
- 🔄 **Camera Switch** — toggle between front/rear cameras
- 🌐 **REST API Backend** — save metadata, list and delete captured media
- 📱 **Responsive UI** — works on desktop and mobile

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML5, CSS3, Vanilla JavaScript |
| Camera API | WebRTC (getUserMedia), MediaRecorder API, Canvas API |
| Backend | Deno (TypeScript), Base44 SDK |
| Storage | Base44 Entity Database |
| Deployment | Base44 Cloud Functions |

---

## 📡 API Endpoints

All requests: `POST /functions/mediaCapture`

| Action | Description |
|--------|-------------|
| `health` | API status check |
| `save_snapshot` | Save base64 image snapshot |
| `save_video_meta` | Save video metadata |
| `list_media` | List all captured media |
| `delete_media` | Delete a media record |

---

## 🏃 Quick Start

```bash
git clone https://github.com/0mar067/media-capture-studio.git
cd media-capture-studio
open index.html
```

---

## 👨‍💻 About the Developer

**Nyarambe Elnabas Eugine**
- 📧 elnabaseugine@gmail.com
- 🎓 Software Engineering — Moringa School (2025)
- 🤖 AI Certificate — Moringa School (2025)
- 🗣️ IELTS Band 7.5 (C1)
- 🌍 Open to remote work worldwide

---

*MIT License*
