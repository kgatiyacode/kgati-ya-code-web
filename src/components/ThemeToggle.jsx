import { useTheme } from '../ThemeContext';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('system');
    else setTheme('light');
  };

  const getIcon = () => {
    if (theme === 'light') return '☀️';
    if (theme === 'dark') return '🌙';
    return '💻';
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-surface dark:bg-gray-800 border border-accent dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
      title={`Current: ${theme} theme`}
    >
      <span className="text-lg">{getIcon()}</span>
    </button>
  );
}