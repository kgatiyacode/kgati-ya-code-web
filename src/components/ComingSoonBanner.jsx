export function ComingSoonBanner({ feature = "This feature" }) {
  return (
    <div className="flex flex-col justify-center items-center min-h-[400px] text-center p-8">
      <div className="text-6xl mb-4">🚧</div>
      <h2 className="text-3xl font-bold text-text-primary dark:text-white mb-4">Coming Soon</h2>
      <p className="text-text-secondary dark:text-gray-300 mb-6 max-w-md">
        {feature} is under development. Our AI team is working hard to bring you something amazing!
      </p>
      <div className="inline-flex items-center bg-primary/10 dark:bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-bold">
        🤖 AI-Powered • Launching January 1, 2026
      </div>
    </div>
  );
}