import { Sparkles } from 'lucide-react';
import { useState } from 'react';
import clsx from 'clsx';

export default function HomePage() {
  const [clicked, setClicked] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center">
      <div className="text-center px-6">
        <div className="flex justify-center mb-6">
          <div className="bg-indigo-100 rounded-full p-4">
            <Sparkles className="w-10 h-10 text-indigo-500" />
          </div>
        </div>

        <h1 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
          Hello, World!
        </h1>

        <p className="text-lg text-gray-500 mb-8 max-w-md mx-auto">
          Welcome to your brand-new React + Vite application. Built with TypeScript, Tailwind v4, and love.
        </p>

        <button
          onClick={() => setClicked(true)}
          className={clsx(
            'px-6 py-3 rounded-xl font-semibold text-white transition-all duration-200 shadow-md',
            clicked
              ? 'bg-green-500 hover:bg-green-600 cursor-default'
              : 'bg-indigo-500 hover:bg-indigo-600 active:scale-95'
          )}
          disabled={clicked}
        >
          {clicked ? '🎉 You clicked it!' : 'Click me'}
        </button>

        {clicked && (
          <p className="mt-4 text-sm text-gray-400 animate-pulse">
            You're all set. Happy coding!
          </p>
        )}
      </div>
    </div>
  );
}
