import { useState } from 'react';
import { useAuth } from '../AuthContext';

export function Login({ onBack }) {
  const [email, setEmail] = useState('test@example.com');
  const [password, setPassword] = useState('password');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const success = await login(email, password);
      if (success) {
        onBack();
      } else {
        alert('Login failed');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/20 dark:from-primary/20 dark:to-secondary/30 flex items-center justify-center p-4">
      <div className="bg-surface dark:bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-md border border-accent/20 dark:border-gray-700">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-primary to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center relative">
            <span className="text-white text-2xl font-bold">C</span>
            <div className="absolute -top-1 -right-1 text-xs">🤖</div>
          </div>
          <h2 className="text-2xl font-bold text-text-primary dark:text-white mb-2">Welcome Back</h2>
          <p className="text-text-secondary dark:text-gray-300">Sign in to your AI-powered platform</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-text-secondary dark:text-gray-300 text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-accent dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:border-primary focus:outline-none transition-colors"
              required
            />
          </div>
          <div>
            <label className="block text-text-secondary dark:text-gray-300 text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-accent dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:border-primary focus:outline-none transition-colors"
              required
            />
          </div>
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all disabled:opacity-50"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <button 
            onClick={onBack}
            className="text-text-accent dark:text-gray-400 hover:text-text-secondary transition-colors"
          >
            ← Back to Home
          </button>
        </div>
        
        <div className="mt-4 p-3 bg-background dark:bg-gray-700 rounded-lg text-sm text-text-accent dark:text-gray-300">
          <strong>Demo credentials:</strong><br/>
          Email: test@example.com<br/>
          Password: password
        </div>
      </div>
    </div>
  );
}