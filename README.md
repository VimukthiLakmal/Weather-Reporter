# 🌤️ Simple Weather Reporter

A modern React application to fetch and display real-time weather information using the WeatherAPI service. Built using the **MVC architectural pattern**, this app allows users to search for any city and view key weather parameters like temperature, humidity, wind speed, and UV index.

## 🔧 Tech Stack

- ⚛️ React (via Create React App)
- 📁 MVC folder architecture
- 🌐 WeatherAPI for real-time data
- 🎨 CSS-in-JS for styling
- 🚀 Deployed on Netlify

---

## 📁 Project Structure (MVC)

```
src/
│
├── models/         # API logic (fetches weather data)
├── views/          # UI Components (WeatherDisplay, SearchBar, etc.)
├── controllers/    # Data handlers between model and view
├── App.js          # Main component integrating everything
├── index.js        # Entry point
```

---

## 🧪 Features

- 🔍 City-based weather search
- 🌦️ Displays temperature, humidity, wind speed & UV index
- 🖼️ Shows weather condition image (icon)
- 🎯 Responsive card layout (2x2 grid)
- 🧠 MVC separation for better maintainability

---

## 🔑 Environment Setup

Create a `.env` file in the **root** directory with the following keys:

```env
REACT_APP_WEATHER_API_KEY=your_weatherapi_key
REACT_APP_WEATHER_API_URL=https://api.weatherapi.com/v1/current.json
```

> ✅ Note: Don’t commit `.env` to GitHub. It is already ignored via `.gitignore`.

---

## ▶️ Local Development

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/weather-reporter.git
   cd weather-reporter
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

---

## 🌍 Deploying to Netlify

1. Push your code to GitHub.
2. Go to [https://www.netlify.com](https://www.netlify.com) and sign in.
3. Click **"Add new site" > "Import from GitHub"**.
4. Select your repository.
5. Under **Build Settings**:
   - **Build command**: `npm run build`
   - **Publish directory**: `build`
6. Under **Environment variables**, add:
   - `REACT_APP_WEATHER_API_KEY`
   - `REACT_APP_WEATHER_API_URL`
7. Click **Deploy Site**

> ✅ After deployment, Netlify will give you a public URL.

---

## 🔗 Submit

- **Live URL** from Netlify
- **GitHub Repository**
- Optional: Short description or demo GIF

---

## 📜 License

This project is open-source and available under the MIT License.

---

## 👨‍💻 Developed By

Vimukthi Lakmal – 2025