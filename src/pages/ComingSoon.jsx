import { HeroSection } from '../components/HeroSection';
import { EmailSignupForm } from '../components/EmailSignupForm';
import { StatsSection } from '../components/StatsSection';
import { ThemeToggle } from '../components/ThemeToggle';
import { CountdownTimer } from '../components/CountdownTimer';

export function ComingSoon({ onEnter }) {
  return (
    <div className="min-h-screen bg-background dark:bg-gray-900">
      {/* Floating Countdown Timer */}
      <CountdownTimer />
      
      {/* Header */}
      <header className="bg-surface dark:bg-gray-800 shadow-sm border-b border-accent/20 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-purple-600 rounded-lg flex items-center justify-center relative">
              <span className="text-white font-bold text-lg">C</span>
              <div className="absolute -top-1 -right-1 text-xs">🤖</div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-text-primary dark:text-white">Kgati ya Code</h1>
              <div className="text-xs text-primary font-semibold">🤖 AI-POWERED PLATFORM</div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button 
              onClick={onEnter}
              className="text-primary hover:text-secondary font-medium"
            >
              Preview Platform →
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <HeroSection />
      
      {/* Signup */}
      <section className="py-16 px-4">
        <EmailSignupForm />
      </section>
      
      {/* Stats */}
      <StatsSection />
      
      {/* Footer */}
      <footer className="bg-surface dark:bg-gray-800 border-t border-accent/20 dark:border-gray-700 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-text-accent dark:text-gray-400">
          <p>&copy; 2025 Kgati ya Code. <span className="text-primary font-semibold">🤖 100% AI-Powered</span> e-commerce platform for modern businesses.</p>
        </div>
      </footer>
    </div>
  )
}