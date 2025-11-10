export function HeroSection() {
  return (
    <section className="py-20 px-4 text-center relative overflow-hidden">
      {/* AI Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-10 left-10 text-6xl animate-pulse">🤖</div>
        <div className="absolute top-20 right-20 text-4xl animate-bounce">✨</div>
        <div className="absolute bottom-20 left-20 text-5xl animate-pulse">🧠</div>
        <div className="absolute bottom-10 right-10 text-3xl animate-bounce">⚡</div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-8">
          <div className="inline-flex items-center bg-gradient-to-r from-primary/20 to-purple-500/20 text-primary px-6 py-3 rounded-full text-sm font-bold mb-6 border border-primary/30">
            🤖 100% AI-POWERED 🚀 Launching January 1, 2026
          </div>
          <h1 className="text-6xl font-bold text-text-primary dark:text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">AI-First</span> E-Commerce Builder
          </h1>
          <p className="text-xl text-text-secondary dark:text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
            <strong className="text-primary">Artificial Intelligence</strong> creates your store, writes your content, analyzes your data, and grows your business. 
            <span className="text-purple-600 font-semibold">Zero manual work required.</span>
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-surface to-primary/5 dark:from-gray-800 dark:to-primary/10 p-6 rounded-xl border border-primary/20 dark:border-primary/30 relative">
            <div className="absolute top-2 right-2 text-xs bg-primary/20 text-primary px-2 py-1 rounded-full font-bold">AI</div>
            <div className="text-3xl mb-3">🛍️</div>
            <h3 className="font-semibold text-text-primary dark:text-white mb-2">AI Store Generator</h3>
            <p className="text-text-secondary dark:text-gray-300 text-sm"><strong>AI builds your entire store</strong> - products, design, copy, everything automated</p>
          </div>
          <div className="bg-gradient-to-br from-surface to-purple-500/5 dark:from-gray-800 dark:to-purple-500/10 p-6 rounded-xl border border-purple-500/20 dark:border-purple-500/30 relative">
            <div className="absolute top-2 right-2 text-xs bg-purple-500/20 text-purple-600 px-2 py-1 rounded-full font-bold">AI</div>
            <div className="text-3xl mb-3">📊</div>
            <h3 className="font-semibold text-text-primary dark:text-white mb-2">AI Analytics Engine</h3>
            <p className="text-text-secondary dark:text-gray-300 text-sm"><strong>AI analyzes all your data</strong> and provides actionable business insights automatically</p>
          </div>
          <div className="bg-gradient-to-br from-surface to-green-500/5 dark:from-gray-800 dark:to-green-500/10 p-6 rounded-xl border border-green-500/20 dark:border-green-500/30 relative">
            <div className="absolute top-2 right-2 text-xs bg-green-500/20 text-green-600 px-2 py-1 rounded-full font-bold">AI</div>
            <div className="text-3xl mb-3">🤖</div>
            <h3 className="font-semibold text-text-primary dark:text-white mb-2">AI Content Creator</h3>
            <p className="text-text-secondary dark:text-gray-300 text-sm"><strong>AI writes everything</strong> - product descriptions, marketing copy, social posts</p>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-primary/10 via-purple-500/10 to-primary/10 dark:from-primary/20 dark:via-purple-500/20 dark:to-primary/20 p-6 rounded-2xl border border-primary/30 mb-8">
          <h2 className="text-2xl font-bold text-text-primary dark:text-white mb-4 flex items-center justify-center gap-2">
            🧠 <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Powered by Advanced AI</span> ⚡
          </h2>
          <p className="text-text-secondary dark:text-gray-300 text-lg">
            Our platform uses <strong className="text-primary">cutting-edge artificial intelligence</strong> to handle every aspect of your business. 
            From store creation to customer engagement - <span className="text-purple-600 font-semibold">AI does it all.</span>
          </p>
        </div>
      </div>
    </section>
  );
}