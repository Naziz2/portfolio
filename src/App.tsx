import React, { useState } from 'react';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import VideoPage from './pages/VideoPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [currentPath, setCurrentPath] = useState('/');

  const handleNavigate = (path: string) => {
    setCurrentPath(path);
    // Update the page title based on the current path
    document.title = getPageTitle(path);
  };

  const getPageTitle = (path: string): string => {
    switch (path) {
      case '/':
        return 'Nahedh Mohamed Aziz | Web & Software Developer';
      case '/projects':
        return 'Projects | Nahedh Mohamed Aziz';
      case '/videos':
        return 'Videos | Nahedh Mohamed Aziz';
      case '/about':
        return 'About | Nahedh Mohamed Aziz';
      case '/contact':
        return 'Contact | Nahedh Mohamed Aziz';
      default:
        return 'Nahedh Mohamed Aziz | Web & Software Developer';
    }
  };

  // Render the appropriate page based on the current path
  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <HomePage />;
      case '/projects':
        return <ProjectsPage />;
      case '/videos':
        return <VideoPage />;
      case '/about':
        return <AboutPage />;
      case '/contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <MainLayout currentPath={currentPath} onNavigate={handleNavigate}>
      {renderPage()}
    </MainLayout>
  );
}

export default App;