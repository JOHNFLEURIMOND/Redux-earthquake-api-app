import React, { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client"; // Updated import
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./layout/global-style";
import { Helmet } from "react-helmet";
import ErrorBoundary from "./ErrorBoundary"; // Import the ErrorBoundary
import { EarthquakeProvider } from "./Quakes/EarthquakeContext"; // Ensure this path is correct

const App = lazy(() => import("./App.jsx"));

const Main = () => (
  <ErrorBoundary>
    <Helmet>
      <title>My App</title>
      <meta name="description" content="Description of my app" />
    </Helmet>
    <GlobalStyle />
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </ErrorBoundary>
);

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement); // Use createRoot from react-dom/client
  root.render(
    <BrowserRouter>
      <EarthquakeProvider>
        <Main />
      </EarthquakeProvider>
    </BrowserRouter>,
  );

  // Ensure Service Worker is registered properly
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      const swUrl = "/service-worker.js"; // Direct path to the service worker
      navigator.serviceWorker
        .register(swUrl)
        .then((registration) =>
          console.log(
            "Service Worker registered with scope:",
            registration.scope,
          ),
        )
        .catch((error) =>
          console.error("Service Worker registration failed:", error),
        );
    });
  }
} else {
  console.error("Root element not found");
}
