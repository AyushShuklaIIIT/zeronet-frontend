import React from 'react';
import { Menu, Search } from 'lucide-react';

export default function Header({ currentSection, setIsSidebarOpen }) {
  const titles = {
    'dashboard': { title: 'Dashboard', subtitle: "Welcome back! Here's what's happening today." },
    'classes': { title: 'Class Management', subtitle: 'Manage your classes, students, and teachers.' },
    'lessons': { title: 'Lessons & Quizzes', subtitle: 'Upload and manage your educational content.' },
    'quiz-builder': { title: 'Quiz Builder', subtitle: 'Create and customize quizzes for your students.' },
    'analytics': { title: 'Student Analytics', subtitle: 'Track performance and generate reports.' },
    'notifications': { title: 'Notifications', subtitle: 'Send announcements and reminders.' },
    'settings': { title: 'Settings', subtitle: 'Manage school details and user accounts.' }
  };

  const { title, subtitle } = titles[currentSection] || titles['dashboard'];

  return (
    <header className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700 px-4 md:px-8 py-4 sticky top-0 z-10">
      <div className="flex items-center justify-between">
        
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="lg:hidden p-2 -ml-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-700 transition"
          >
            <Menu className="w-6 h-6" />
          </button>
          
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-white">{title}</h1>
            <p className="hidden md:block text-slate-400 text-sm">{subtitle}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          <div className="relative hidden sm:block">
            <input type="text" placeholder="Search..." className="w-48 md:w-64 px-4 py-2 pl-10 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>
          <div className="flex items-center gap-2 px-3 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-xl shrink-0">
            <span className="w-2 h-2 bg-emerald-400 rounded-full pulse-dot"></span> 
            <span className="hidden sm:inline text-emerald-400 text-sm font-medium">Online</span>
          </div>
        </div>

      </div>
    </header>
  );
}