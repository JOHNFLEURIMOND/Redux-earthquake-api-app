# 🌍 Earthquake App

## Overview 🚀

The Earthquake App is a fullstack application designed to provide real-time earthquake data. It uses modern technologies to ensure a seamless user experience and robust backend functionality.

### Technologies Used

- **Frontend:** React.js, Redux, styled-components
- **Backend:** Node.js
- **Build Tool:** Webpack

## Getting Started 🚀

To get up and running with this project, follow these steps:

### Prerequisites

Ensure you have the correct versions of Node.js and npm installed. You can check your current versions with:

```bash
node -v && npm -v
```

### Install Node Version Manager (nvm)

If you need to install or switch Node.js versions, use `nvm`:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
nvm install 20
```

### Clone the Repository

```bash
git clone {{repository-url}}
cd {{repository-directory}}
```

### Install Dependencies

```bash
npm install
```

## Available Scripts 🎬

In the project directory, you can run:

### `npm run serve`

Runs both the frontend and backend servers concurrently in development mode. Open [http://localhost:8080](http://localhost:8080) to view the app.

### `npm run build`

Builds the app for production to the `dist` folder. Optimizes the build for the best performance with minified files and hashed filenames.

### `npm run prettier`

Formats the codebase according to Prettier configuration.

### `npm run restart`

Cleans up, updates dependencies, and restarts the application:

```bash
npm run prettier && rm -rf package-lock.json && rm -rf node_modules && npm install && npx npm-check-updates -u && npm install && npm run serve
```

### `npm run push`

Cleans up, updates dependencies, and pushes changes to the repository:

```bash
npm run prettier && rm -rf package-lock.json && rm -rf node_modules && git add . && git commit -m 'Update components and loader' && git push
```

### `npm run kill`

Kills all running Node.js processes:

```bash
sudo kill -9 $(ps aux | grep node | grep -v grep | awk '{print $2}')
```

### `npm run clean`

Cleans npm cache and rebuilds the project:

```bash
npm cache clean --force && npm run build
```

## Contributing 🤝

Contributions are welcome! Please read our [contributing guidelines](CONTRIBUTING.md) for more information on how to get involved.

## License 📜

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact 📫

For questions or feedback, please reach out to [Fleur](http://johnfleurimond.com).

---
