# Verdethos Ionic Application

Ionic Angular application for displaying producer details with a modern, responsive UI.

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v18 or higher) - [Download Node.js](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Ionic CLI** (optional, but recommended) - Install globally with:
  ```bash
  npm install -g @ionic/cli
  ```

## 📁 Project Structure

```
verdethosIonic/
├── src/                          # Source files
│   ├── app/                      # Application code
│   │   ├── app.component.html    # Root component template
│   │   ├── app.component.ts      # Root component
│   │   ├── app.module.ts         # Root module
│   │   ├── app-routing.module.ts # Routing configuration
│   │   └── producer-details/     # Producer details page
│   │       ├── producer-details.page.html  # Page template
│   │       ├── producer-details.page.scss   # Page styles
│   │       └── producer-details.page.ts     # Page component
│   ├── global.scss               # Global styles
│   ├── index.html                # Main HTML file
│   ├── main.ts                   # Application entry point
│   └── polyfills.ts              # Polyfills
├── www/                          # Build output (generated, not committed)
├── angular.json                  # Angular CLI configuration
├── ionic.config.json             # Ionic configuration
├── package.json                  # Project dependencies
├── tsconfig.json                 # TypeScript configuration
├── tsconfig.app.json             # TypeScript app configuration
└── README.md                     # This file
```

## 🚀 Installation

Follow these steps to install all required dependencies:

1. **Navigate to the project directory:**
   ```bash
   cd verdethosIonic
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   
   Or if you prefer using yarn:
   ```bash
   yarn install
   ```

3. **Wait for installation to complete:**
   This will install all the dependencies listed in `package.json`, including:
   - Angular 20.0.0
   - Ionic Angular 8.0.0
   - Capacitor plugins
   - Other required packages

## ▶️ Running the Project

Once dependencies are installed, run the project using Ionic CLI:

```bash
ionic serve
```

This will:
- Start the development server
- Open the application in your default browser at `http://localhost:8100`
- Enable live reload for automatic updates when you make changes

## 🌐 Viewing in Browser

After running the project:

1. The development server will start and display the local URL at `http://localhost:8100`
2. Open your web browser
3. Navigate to the displayed URL
4. You should see the **Producer Details** page with:
   - A header with the Verdethos theme color (#2a524e)
   - A centered card displaying producer information
   - All producer details including name, type, farms, status, etc.

## 🔧 Technology Stack

- **Framework**: Angular 20.0.0
- **UI Library**: Ionic Angular 8.0.0
- **Language**: TypeScript 5.9.0
- **Build Tool**: Angular CLI
- **Mobile**: Capacitor 8.0.0

## 📄 License

This project is private and proprietary.
