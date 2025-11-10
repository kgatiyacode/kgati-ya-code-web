import { useState } from 'react';
import { post } from '../apiService';

export function EmailSignupForm() {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [planInterest, setPlanInterest] = useState('basic');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await post('/prelaunch/signup', { email, fullName, planInterest });
      setMessage(res.message);
      setEmail('');
      setFullName('');
    } catch (error) {
      setMessage('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-surface dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-primary/30 max-w-md mx-auto relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-purple-500 to-primary"></div>
      <div className="text-center mb-6">
        <div className="inline-flex items-center bg-primary/10 dark:bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold mb-3">
          🤖 AI-POWERED EARLY ACCESS
        </div>
        <h3 className="text-2xl font-bold text-text-primary dark:text-white">Join the AI Revolution</h3>
      </div>
      
      {message ? (
        <div className="text-center p-4 bg-primary/10 rounded-lg text-primary font-medium">
          {message}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full p-3 border border-accent rounded-lg focus:border-primary focus:outline-none"
              required
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-accent rounded-lg focus:border-primary focus:outline-none"
              required
            />
          </div>
          <div>
            <select
              value={planInterest}
              onChange={(e) => setPlanInterest(e.target.value)}
              className="w-full p-3 border border-accent rounded-lg focus:border-primary focus:outline-none"
            >
              <option value="basic">Basic Plan</option>
              <option value="pro">Pro Plan</option>
              <option value="enterprise">Enterprise</option>
            </select>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all disabled:opacity-50"
          >
            {loading ? 'Joining...' : 'Get Early Access'}
          </button>
        </form>
      )}
    </div>
  );
}