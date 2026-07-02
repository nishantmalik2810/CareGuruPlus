<h1 align="center">🩺 CareGuru+</h1>

<h3 align="center">
AI Powered Healthcare Assistant
</h3>

<p align="center">

An AI-powered healthcare assistant built using <b>React</b>, <b>Express</b>,
<b>PostgreSQL</b>, <b>Prisma ORM</b>, and
<b>Google Gemini AI</b>.

It intelligently assesses symptoms, detects emergencies,
provides AI-generated medical guidance,
and recommends the next course of action.

</p>

---

<p align="center">

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)

![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?style=for-the-badge&logo=typescript)

![Express](https://img.shields.io/badge/Express.js-Backend-black?style=for-the-badge&logo=express)

![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-336791?style=for-the-badge&logo=postgresql)

![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge&logo=prisma)

![Google Gemini](https://img.shields.io/badge/AI-Google%20Gemini-4285F4?style=for-the-badge&logo=google)

![Render](https://img.shields.io/badge/Backend-Render-46E3B7?style=for-the-badge)

![Vercel](https://img.shields.io/badge/Frontend-Vercel-black?style=for-the-badge&logo=vercel)

</p>

---

# 🌍 Live Demo

| Service | Link |
|---------|------|
| 🌐 Frontend | https://care-guru-plus.vercel.app |
| ⚙ Backend API | https://careguruplus-api.onrender.com |
| ❤️ Health Check | https://careguruplus-api.onrender.com/health |
| 📂 GitHub Repository | https://github.com/nishantmalik2810/CareGuruPlus |

---

# 📖 About The Project

CareGuru+ is an AI-powered healthcare assistant that helps users perform an initial symptom assessment through natural language conversations.

Instead of using predefined forms, users can simply describe their symptoms in plain English. The system analyzes the symptoms, detects possible emergency situations, provides AI-generated guidance using **Google Gemini AI**, and recommends the most appropriate next step.

The project demonstrates the integration of modern full-stack development with Generative AI, REST APIs, PostgreSQL, Prisma ORM, and cloud deployment.

> **Disclaimer**
>
> This application is developed for educational purposes only and is **NOT** a substitute for professional medical advice, diagnosis, or treatment.

---

# ✨ Features

- 🤖 Google Gemini AI Integration
- 💬 Natural Language Symptom Assessment
- 🚨 Emergency Symptom Detection
- 🩺 Possible Condition Suggestions
- 📋 Follow-up Question Generation
- 📊 Triage Recommendation
- 📅 Book Appointment
- 💊 Buy Medicine
- 🧪 Order Lab Test
- 👨‍⚕️ Talk to a Real Doctor
- 🌐 REST API Architecture
- ⚡ Fast React Frontend
- 🗄 PostgreSQL Database
- 🔥 Prisma ORM
- 📱 Responsive Design
- ☁️ Fully Deployed on Vercel & Render

---

# 📸 Application Screenshots

## 🏠 Home Page

![Home](screenshots/home.png)

---

## 🤖 AI Chat

![Chat](screenshots/chat.png)

---

## ❤️ Backend Health Check

![Health](screenshots/health.png)

---
# 🏗 System Architecture

```text
                         User
                           │
                           ▼
                  React + TypeScript
                           │
                      Axios REST API
                           │
                           ▼
                  Express.js Backend
                           │
        ┌──────────────────┼──────────────────┐
        ▼                  ▼                  ▼
 Emergency Service   Conversation Engine   Symptom Analysis
                                               │
                                               ▼
                                  Google Gemini 2.5 Flash
                                               │
                                               ▼
                                     Response Formatter
                                               │
                                               ▼
                                        Prisma ORM
                                               │
                                               ▼
                                      PostgreSQL Database
                                               │
                                               ▼
                                         Render Deployment
```

---

# ⚙️ Tech Stack

| Category | Technologies |
|----------|--------------|
| Frontend | React 19, TypeScript, Vite, Axios, Framer Motion |
| Backend | Node.js, Express.js, TypeScript |
| AI | Google Gemini 2.5 Flash |
| Database | PostgreSQL |
| ORM | Prisma ORM |
| Deployment | Vercel, Render |
| Version Control | Git & GitHub |

---

# 📂 Project Structure

```text
CareGuruPlus/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.ts
│
├── prisma/
│   ├── migrations/
│   └── schema.prisma
│
├── screenshots/
│
├── src/
│   ├── config/
│   ├── database/
│   ├── modules/
│   │    └── chat/
│   ├── shared/
│   └── server.ts
│
├── .env
├── package.json
├── tsconfig.json
└── README.md
```

---

# 🔄 Application Workflow

```text
User enters symptoms
          │
          ▼
React Frontend
          │
          ▼
Express Backend
          │
          ▼
Emergency Detection
          │
          ▼
Symptom Analysis
          │
          ▼
Google Gemini AI
          │
          ▼
AI Response Formatter
          │
          ▼
JSON Response
          │
          ▼
Frontend Displays Recommendation
```

---

# 🚀 Key Functionalities

- AI-powered medical conversations
- Symptom assessment
- Emergency detection
- Triage recommendation
- Suggested possible conditions
- Follow-up medical questions
- Appointment action
- Lab test recommendation
- Medicine recommendation
- Professional medical disclaimer
- REST API communication
- Responsive interface
- Cloud deployment

# 🚀 Installation

## Clone the Repository

```bash
git clone https://github.com/nishantmalik2810/CareGuruPlus.git

cd CareGuruPlus
```

---

## Install Backend Dependencies

```bash
npm install
```

---

## Install Frontend Dependencies

```bash
cd frontend

npm install
```

---

## Configure Environment Variables

Create a `.env` file in the project root.

```env
PORT=5000

NODE_ENV=development

DATABASE_URL=YOUR_POSTGRES_DATABASE_URL

JWT_SECRET=YOUR_SECRET_KEY

GEMINI_API_KEY=YOUR_GEMINI_API_KEY

FRONTEND_URL=http://localhost:3000
```

---

## Run Backend

```bash
npm run dev
```

---

## Run Frontend

```bash
cd frontend

npm run dev
```

---

# 📡 API Endpoints

## Health Check

```http
GET /health
```

Returns server status.

---

## AI Chat

```http
POST /chat
```

### Request

```json
{
  "sessionId": "123",
  "message": "I have fever and headache for 2 days"
}
```

---

### Response

```json
{
  "success": true,
  "reply": "AI generated response...",
  "assessment": {
    "symptoms": [
      "fever",
      "headache"
    ],
    "possibleConditions": [
      "Viral Fever"
    ],
    "recommendation": "doctor",
    "followUpQuestion": "How many days have you had these symptoms?"
  },
  "triageLevel": "doctor",
  "actions": [
    "Book Appointment",
    "Order Lab Test",
    "Buy Medicine",
    "Talk to a real doctor"
  ]
}
```

---

# ☁️ Deployment

## Frontend

Hosted on **Vercel**

```
https://care-guru-plus.vercel.app
```

---

## Backend

Hosted on **Render**

```
https://careguruplus-api.onrender.com
```

---

## Database

Hosted on **Render PostgreSQL**

---

# 🧪 Testing

Build the backend

```bash
npm run build
```

Start development server

```bash
npm run dev
```

Run frontend

```bash
cd frontend

npm run dev
```

---

# 🔒 Security

- Environment variables stored securely
- API keys excluded from Git using `.gitignore`
- Emergency symptoms handled before AI processing
- Medical disclaimer included in every AI response

# 🛣 Roadmap

The following features are planned for future releases:

- [x] AI-powered symptom assessment
- [x] Google Gemini AI integration
- [x] Emergency symptom detection
- [x] PostgreSQL integration
- [x] Cloud deployment (Vercel & Render)
- [ ] Conversation Memory
- [ ] Persistent Chat History
- [ ] JWT Authentication
- [ ] User Profiles
- [ ] Doctor Dashboard
- [ ] Admin Dashboard
- [ ] Appointment Booking
- [ ] Lab Test Booking
- [ ] Medicine Recommendation
- [ ] Voice Assistant
- [ ] Email Notifications
- [ ] Progressive Web App (PWA)

---

# 🚀 Future Scope

CareGuru+ is designed as a scalable healthcare platform. Future versions aim to include:

- Multi-turn AI conversations with memory
- Real-time symptom analysis using medical APIs
- Electronic Health Record (EHR) support
- Doctor appointment scheduling
- Secure patient authentication
- Medical report generation (PDF)
- Voice-enabled AI assistant
- Mobile application (Android & iOS)
- AI-assisted health analytics dashboard

---

# 🤝 Contributing

Contributions are welcome!

If you would like to contribute:

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature/your-feature
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push your branch

```bash
git push origin feature/your-feature
```

5. Open a Pull Request

---

# 📄 License

This project is intended for educational and portfolio purposes.

---

# 👨‍💻 Author

## Nishant Malik

- GitHub: https://github.com/nishantmalik2810
- Project: https://github.com/nishantmalik2810/CareGuruPlus

---

# 🙏 Acknowledgements

This project was built using the following technologies and services:

- React
- TypeScript
- Node.js
- Express.js
- PostgreSQL
- Prisma ORM
- Google Gemini AI
- Vercel
- Render
- Axios
- Framer Motion
- Lucide React

Special thanks to the open-source community for providing the amazing tools and libraries that made this project possible.

---

# ⭐ Support

If you found this project helpful, consider supporting it by:

- ⭐ Starring the repository
- 🍴 Forking the repository
- 🛠 Contributing improvements
- 📢 Sharing it with others

---

<p align="center">

### 🩺 CareGuru+

**Built with ❤️ by Nishant Malik**

AI Powered Healthcare Assistant

⭐ If you like this project, don't forget to star the repository!

</p>