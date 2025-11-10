import { useState, useEffect } from 'react';
import { get } from '../apiService';

export function StatsSection() {
  const [stats, setStats] = useState({ signups: 0, launching: 'January 1, 2026' });

  useEffect(() => {
    // Mock data since API is not running
    setStats({
      signups: 247,
      launching: 'January 1, 2026'
    });
  }, []);

  return (
    <section className="py-16 px-4 bg-surface dark:bg-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-text-primary dark:text-white mb-12 flex items-center justify-center gap-2">
          Join the <span className="text-primary">🤖 AI Revolution</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20 rounded-xl border border-primary/20">
            <div className="text-4xl font-bold text-primary mb-2">{stats.signups}+</div>
            <div className="text-text-secondary dark:text-gray-300">AI Early Adopters</div>
          </div>
          <div className="p-6 bg-gradient-to-br from-purple-500/5 to-purple-500/10 dark:from-purple-500/10 dark:to-purple-500/20 rounded-xl border border-purple-500/20">
            <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
            <div className="text-text-secondary dark:text-gray-300">AI-Powered Features</div>
          </div>
          <div className="p-6 bg-gradient-to-br from-green-500/5 to-green-500/10 dark:from-green-500/10 dark:to-green-500/20 rounded-xl border border-green-500/20">
            <div className="text-4xl font-bold text-green-600 mb-2">{stats.launching}</div>
            <div className="text-text-secondary dark:text-gray-300">Launch Date</div>
          </div>
        </div>
        
        <div className="mt-12 p-6 bg-gradient-to-r from-primary/10 via-purple-500/10 to-primary/10 dark:from-primary/20 dark:via-purple-500/20 dark:to-primary/20 rounded-xl border border-primary/30">
          <h3 className="text-xl font-semibold text-text-primary dark:text-white mb-3 flex items-center justify-center gap-2">
            🎁 AI Pioneer Benefits
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-text-secondary dark:text-gray-300">
            <div>🤖 Free AI assistant for life</div>
            <div>⚡ Priority AI processing</div>
            <div>🔥 Exclusive AI features access</div>
            <div>💎 Lifetime platform updates</div>
          </div>
        </div>
      </div>
    </section>
  );
}