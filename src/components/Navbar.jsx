import React from 'react';
import { ModeToggle } from './mode-toggle';

const Navbar = ({ onViewHistory, isHistoryPage }) => {
  return (
    <nav className="top-0 left-0 right-0 bg-card/80 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="flex items-center space-x-2">
            <span className="text-2xl">🎯</span>
            <span className="text-xl font-semibold text-card-foreground dark:text-blue-500">Quiz Master</span>
          </a>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={onViewHistory}
              className="px-4 py-2 text-sm border border-primary rounded-lg text-primary hover:bg-primary hover:text-primary-foreground transition-colors hidden sm:block"
            >
              {isHistoryPage ? 'Back to Quiz' : 'View History'}
            </button>
            <ModeToggle />
          </div>
        </div>
      </div>
      
      {/* Mobile bottom navigation */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border">
        <div className="flex justify-around items-center h-16">
          <button
            onClick={onViewHistory}
            className="flex flex-col items-center px-4 py-2 text-primary"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs mt-1">{isHistoryPage ? 'Back' : 'History'}</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 