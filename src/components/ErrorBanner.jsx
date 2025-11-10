export function ErrorBanner({ message, onRetry }) {
  return (
    <div className="flex items-center justify-between bg-red-500/10 dark:bg-red-500/20 text-red-600 dark:text-red-400 border border-red-500/30 rounded-lg p-4">
      <div className="flex items-center gap-2">
        <span className="text-lg">⚠️</span>
        <span>{message || "Something went wrong. Please try again."}</span>
      </div>
      {onRetry && (
        <button 
          onClick={onRetry}
          className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 transition-colors"
        >
          Retry
        </button>
      )}
    </div>
  );
}