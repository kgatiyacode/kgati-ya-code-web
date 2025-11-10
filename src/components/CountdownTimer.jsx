import { useState, useEffect } from 'react';

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const targetDate = new Date('2026-01-01T00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed top-4 right-4 z-50 bg-gradient-to-r from-primary to-purple-600 text-white p-4 rounded-2xl shadow-2xl border border-white/20 backdrop-blur-sm">
      <div className="text-center">
        <div className="text-xs font-bold mb-2 flex items-center justify-center gap-1">
          🚀 LAUNCH COUNTDOWN 🤖
        </div>
        <div className="grid grid-cols-4 gap-2 text-center">
          <div className="bg-white/20 rounded-lg p-2">
            <div className="text-xl font-bold">{timeLeft.days || 0}</div>
            <div className="text-xs">DAYS</div>
          </div>
          <div className="bg-white/20 rounded-lg p-2">
            <div className="text-xl font-bold">{timeLeft.hours || 0}</div>
            <div className="text-xs">HRS</div>
          </div>
          <div className="bg-white/20 rounded-lg p-2">
            <div className="text-xl font-bold">{timeLeft.minutes || 0}</div>
            <div className="text-xs">MIN</div>
          </div>
          <div className="bg-white/20 rounded-lg p-2">
            <div className="text-xl font-bold">{timeLeft.seconds || 0}</div>
            <div className="text-xs">SEC</div>
          </div>
        </div>
        <div className="text-xs mt-2 opacity-90">Jan 1, 2026</div>
      </div>
    </div>
  );
}