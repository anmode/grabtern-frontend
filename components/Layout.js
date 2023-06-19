import { useEffect, useState } from 'react';
import Head from 'next/head';

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(darkMode ? 'light' : 'dark');
    root.classList.add(darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href={`https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.16/tailwind.min.css`}
        />
      </Head>

      <nav className="flex justify-between items-center mb-6 bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 pt-3 text-black">
        {/* Your navbar code */}
        <button
          className="p-2 rounded bg-gray-300 dark:bg-gray-800"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </nav>

      <main>{children}</main>
    </div>
  );
};

export default Layout;
