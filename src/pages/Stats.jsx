import { useState, useEffect } from 'react';
import { get } from '../apiService';
import { ComingSoonBanner } from '../components/ComingSoonBanner';
import { ErrorBanner } from '../components/ErrorBanner';

export function Stats() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Mock data for now since API endpoints don't exist yet
        setStats({
          visits: 1247,
          apiRequests: 3891,
          avgResponseTime: 145,
          topRegions: ['US', 'UK', 'ZA'],
          dailyVisits: [120, 145, 167, 189, 201, 178, 156]
        });
      } catch (err) {
        setError('Failed to load analytics data');
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background dark:bg-gray-900 flex items-center justify-center">
        <div className="text-primary text-xl">🤖 Loading AI Analytics...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background dark:bg-gray-900 p-8">
        <ErrorBanner message={error} onRetry={() => window.location.reload()} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background dark:bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-text-primary dark:text-white mb-8 flex items-center gap-2">
          📊 AI Platform Analytics
        </h1>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-surface dark:bg-gray-800 p-6 rounded-xl border border-accent/20 dark:border-gray-700">
            <div className="text-2xl font-bold text-primary mb-2">{stats.visits.toLocaleString()}</div>
            <div className="text-text-secondary dark:text-gray-300">Total Visits</div>
          </div>
          <div className="bg-surface dark:bg-gray-800 p-6 rounded-xl border border-accent/20 dark:border-gray-700">
            <div className="text-2xl font-bold text-purple-600 mb-2">{stats.apiRequests.toLocaleString()}</div>
            <div className="text-text-secondary dark:text-gray-300">API Requests</div>
          </div>
          <div className="bg-surface dark:bg-gray-800 p-6 rounded-xl border border-accent/20 dark:border-gray-700">
            <div className="text-2xl font-bold text-green-600 mb-2">{stats.avgResponseTime}ms</div>
            <div className="text-text-secondary dark:text-gray-300">Avg Response Time</div>
          </div>
        </div>

        <ComingSoonBanner feature="Advanced analytics dashboard with AI insights" />
      </div>
    </div>
  );
}