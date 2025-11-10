import { useState } from 'react';
import { useAuth } from '../AuthContext';
import { Login } from './Login';
import { ThemeToggle } from '../components/ThemeToggle';

export function Home({ onBack }) {
  const { user, logout } = useAuth();
  const [showLogin, setShowLogin] = useState(false);

  if (showLogin && !user) {
    return <Login onBack={() => setShowLogin(false)} />;
  }

  return (
    <div className="min-h-screen bg-background dark:bg-gray-900">
      {/* Header */}
      <header className="bg-surface dark:bg-gray-800 shadow-sm border-b border-accent/20 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-purple-600 rounded-lg flex items-center justify-center relative">
              <span className="text-white font-bold text-lg">C</span>
              <div className="absolute -top-1 -right-1 text-xs">🤖</div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-text-primary dark:text-white">Code ya Kgati</h1>
              <div className="text-xs text-primary font-semibold">🤖 AI-POWERED PLATFORM</div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            {user ? (
              <>
                <span className="text-text-secondary dark:text-gray-300">Welcome, {user.email}</span>
                <button onClick={logout} className="text-primary hover:text-secondary">Logout</button>
              </>
            ) : (
              <button 
                onClick={() => setShowLogin(true)}
                className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition-colors"
              >
                Login
              </button>
            )}
            <button 
              onClick={onBack}
              className="text-text-accent dark:text-gray-400 hover:text-text-secondary"
            >
              ← Back
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-primary/10 dark:bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-bold mb-6">
            🤖 AI-POWERED E-COMMERCE PREVIEW
          </div>
          <h2 className="text-5xl font-bold text-text-primary dark:text-white mb-6">
            Build Your Store with <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">AI Magic</span>
          </h2>
          <p className="text-xl text-text-secondary dark:text-gray-300 mb-8 leading-relaxed">
            Experience the future of e-commerce. Our AI creates your store, writes your content, 
            and grows your business automatically.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-primary to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all">
              🤖 Start AI Store Builder
            </button>
            <button className="border border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary/10 transition-all">
              Watch AI Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-surface dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-text-primary dark:text-white text-center mb-12">🤖 AI-Powered Features</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20 rounded-xl border border-primary/20">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛍️</span>
              </div>
              <h4 className="text-xl font-semibold text-text-primary dark:text-white mb-3">AI Store Generator</h4>
              <p className="text-text-secondary dark:text-gray-300">AI creates your entire online store - design, products, descriptions, and pricing automatically.</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-500/5 to-purple-500/10 dark:from-purple-500/10 dark:to-purple-500/20 rounded-xl border border-purple-500/20">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h4 className="text-xl font-semibold text-text-primary dark:text-white mb-3">Smart Analytics</h4>
              <p className="text-text-secondary dark:text-gray-300">AI analyzes your social media and sales data to provide actionable business insights.</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-500/5 to-green-500/10 dark:from-green-500/10 dark:to-green-500/20 rounded-xl border border-green-500/20">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✍️</span>
              </div>
              <h4 className="text-xl font-semibold text-text-primary dark:text-white mb-3">Content AI</h4>
              <p className="text-text-secondary dark:text-gray-300">AI writes product descriptions, marketing copy, and social media posts that convert.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Tools Preview */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-text-primary dark:text-white mb-8">🚀 AI Tools & Integrations</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['AI Store Builder', 'Smart Analytics', 'Content Generator', 'Social Media AI', 'Price Optimizer', 'SEO Assistant', 'Customer AI', 'Growth Predictor'].map(tool => (
              <div key={tool} className="bg-surface dark:bg-gray-800 p-4 rounded-lg border border-accent/20 dark:border-gray-700 hover:border-primary/30 transition-colors">
                <span className="font-medium text-text-primary dark:text-white text-sm">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface dark:bg-gray-800 border-t border-accent/20 dark:border-gray-700 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-text-accent dark:text-gray-400">
          <p>&copy; 2025 Code ya Kgati. <span className="text-primary font-semibold">🤖 100% AI-Powered</span> e-commerce platform for modern businesses.</p>
        </div>
      </footer>
    </div>
  );
}