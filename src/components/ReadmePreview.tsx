'use client';

import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { GithubIcon, Loader2 } from 'lucide-react';

export function ReadmePreview() {
  const [readme, setReadme] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReadme = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/ThashmikaX/ThashmikaX/main/README.md');
        if (!response.ok) throw new Error('Failed to fetch README');
        const text = await response.text();
        setReadme(text);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load README');
      } finally {
        setLoading(false);
      }
    };

    fetchReadme();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-red-500 space-y-4">
        <span className="text-xl font-semibold">Error loading README</span>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-900 px-6 py-4 border-b dark:border-gray-700">
            <GithubIcon className="w-6 h-6 dark:text-gray-200" />
            <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-200">I'm Sudesh Thashmika</h1>
          </div>
          
          <div className="p-6 prose prose-blue dark:prose-invert max-w-none">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={{
                img: ({node, ...props}) => (
                  <img className="max-w-full h-auto rounded-lg shadow-md" {...props} alt={props.alt || ''} />
                ),
                a: ({node, ...props}) => (
                  <a className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors" {...props} target="_blank" rel="noopener noreferrer" />
                ),
                h1: ({node, ...props}) => (
                  <h1 className="text-3xl font-bold mb-4 dark:text-gray-200" {...props} />
                ),
                h2: ({node, ...props}) => (
                  <h2 className="text-2xl font-semibold mt-6 mb-3 dark:text-gray-300" {...props} />
                ),
                code: ({ node, inline, ...props }: { node?: any; inline?: boolean; [key: string]: any }) => (
                inline ? 
                    <code className="bg-gray-100 dark:bg-gray-700 rounded px-1 py-0.5" {...props} /> :
                    <code className="block bg-gray-900 text-white dark:bg-gray-800 p-4 rounded-lg overflow-x-auto" {...props}>{props.children}</code>
                ),
                pre: ({ node, ...props }: { node?: any; [key: string]: any }) => (
                <pre className="bg-gray-900 text-white dark:bg-gray-800 p-4 rounded-lg overflow-x-auto" {...props} />
                )

              }}
            >
              {readme}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}