import { useState } from 'react';
import { ComingSoon } from './pages/ComingSoon';
import { Home } from './pages/Home';
import Dashboard from './pages/Dashboard';
import { AuthProvider } from './AuthContext';
import { ThemeProvider } from './ThemeContext';

function App() {
  const [currentPage, setCurrentPage] = useState('coming-soon');

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home onBack={() => setCurrentPage('coming-soon')} />;
      case 'dashboard':
        return <Dashboard />;
      default:
        return (
          <ComingSoon 
            onEnter={() => setCurrentPage('home')}
            onDashboard={() => setCurrentPage('dashboard')}
          />
        );
    }
  };

  return (
    <ThemeProvider>
      <AuthProvider>
        <div className="min-h-screen bg-background dark:bg-gray-900 transition-colors">
          {renderPage()}
        </div>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App
