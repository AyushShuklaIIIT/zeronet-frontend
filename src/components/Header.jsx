import React from 'react'

const Header = ({ currentSection }) => {
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
    <header className='bg-slate-800/50 backdrop-blur-sm border-b border-slate-700 px-8 py-4 sticky top-0 z-10'>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-2xl font-bold text-white'>{title}</h1>
          <p className='text-slate-400 text-sm'>{subtitle}</p>
        </div>
        <div className='flex items-center gap-4'>
          <div className='relative'>
            <input type="text" placeholder='Search...' className='w-64 px-4 py-2 pl-10 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm' />
            <svg className='w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
            </svg>
          </div>
          <div className='flex items-center gap-2 px-3 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-xl'>
            <span className='w-2 h-2 bg-emerald-400 rounded-full pulse-dot'></span>
            <span className='text-emerald-400 text-sm font-medium'>Online</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;