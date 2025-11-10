import { useNavigate } from 'react-router-dom';

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <div className="text-8xl mb-6">🤖</div>
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-bold text-text-primary dark:text-white mb-4">
          AI Can't Find This Page
        </h2>
        <p className="text-text-secondary dark:text-gray-300 mb-8">
          Even our advanced AI couldn't locate the page you're looking for. 
          It might have been moved or doesn't exist.
        </p>
        <div className="space-y-3">
          <button 
            onClick={() => navigate('/')}
            className="w-full bg-gradient-to-r from-primary to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg transition-all"
          >
            🏠 Back to Home
          </button>
          <button 
            onClick={() => navigate(-1)}
            className="w-full border border-primary text-primary py-3 px-6 rounded-lg font-medium hover:bg-primary/10 transition-all"
          >
            ← Go Back
          </button>
        </div>
      </div>
    </div>
  );
}