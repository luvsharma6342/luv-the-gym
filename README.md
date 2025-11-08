#  💪 Luv The Gym

A modern, responsive **Gym Website** built with **Next.js 14**, **TypeScript**, and **MongoDB**.  
This project features a fully functional contact form with backend integration using **API Routes** and **Mongoose**, deployed live on **Vercel**.

🖥️ **Live Demo:** [https://luv-the-gym.vercel.app](https://luv-the-6h92rfcps-luvsharma6342s-projects.vercel.app/)

---

## 🚀 Features

- ⚡ Built with **Next.js (App Router)** and **TypeScript**
- 🧠 Full-stack setup with **Express-style API routes**
- 📩 Contact form connected to **MongoDB Atlas**
- 🧱 Clean, responsive UI using **Tailwind CSS**
- 🌍 Server-Side Rendering (SSR) for performance and SEO
- ☁️ Deployed seamlessly on **Vercel**

---

## 🛠️ Tech Stack

| Category | Technologies |
|-----------|---------------|
| Frontend | Next.js 14, TypeScript, React |
| Styling | Tailwind CSS |
| Backend | Next.js API Routes, Mongoose |
| Database | MongoDB Atlas |
| Deployment | Vercel |

---

## 🧩 Folder Structure

luv-the-gym/
┣ 📂 app/                # Next.js pages and routes
┃ ┣ 📂 api/              # API endpoints (backend logic)
┃ ┣ 📂 contact/          # Contact page
┣ 📂 lib/                # MongoDB connection logic
┣ 📂 models/             # Mongoose schemas and models
┣ 📜 .env.local          # Environment variables (not committed)
┣ 📜 package.json        # Dependencies and scripts
┣ 📜 next.config.js      # Next.js configuration
┣ 📜 tsconfig.json       # TypeScript configuration
┣ 📜 README.md           # Project documentation

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the repository

git clone https://github.com/<your-username>/luv-the-gym.git
cd luv-the-gym

### 2️⃣ Install dependencies

npm install

### 3️⃣ Configure environment variables
Create a `.env.local` file in the root directory and add:

MONGODB_URI="your-mongodb-atlas-connection-string"

### 4️⃣ Run the development server

npm run dev

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ☁️ Deployment

This project is live on **Vercel**.  
To deploy your own version:

1. Push the project to GitHub  
2. Import the repo to [Vercel](https://vercel.com)  
3. Add your environment variable (`MONGODB_URI`)  
4. Click **Deploy**

---

## 🧠 Learning Goals

This project helped me understand:
- The complete **frontend → backend → database** flow  
- Working with **Next.js App Router**  
- Handling **form submissions** with server-side logic  
- Deploying a **full-stack project** with environment variables

---

## 🔮 Future Improvements

- Add an admin dashboard to view contact submissions  
- Include membership plans and testimonials  
- Integrate email notifications using Nodemailer  
- Add animations and dynamic workout sections  

---

## 🧑‍💻 Author

**Luv Sharma**  
Web Developer | Building full-stack web apps with modern tools  
[LinkedIn](https://www.linkedin.com/in/luv-sharma-098485218/) • [GitHub](https://github.com/luvsharma6342)

---

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).
