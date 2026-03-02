import React, { useState } from 'react'
import Login from './components/Login'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Dashboard from './components/sections/Dashboard'
import Classes from './components/sections/Classes'
import Lessons from './components/sections/Lessons'
import QuizBuilder from './components/sections/QuizBuilder'
import Analytics from './components/sections/Analytics'
import Notifications from './components/sections/Notifications'
import Settings from './components/sections/Settings'

function App() {
  const [user, setUser] = useState(null);
  const [currentSection, setCurrentSection] = useState('dashboard');

  const handleLogin = (userData) => setUser(userData);
  const handleLogout = () => {
    setUser(null);
    setCurrentSection('dashboard');
  };

  if(!user) {
    return <Login onLogin={handleLogin} />;
  }

  const renderSection = () => {
    switch(currentSection) {
      case 'dashboard': return <Dashboard />;
      case 'classes': return <Classes />;
      case 'lessons': return <Lessons />;
      case 'quiz-builder': return <QuizBuilder />;
      case 'analytics': return <Analytics />;
      case 'notifications': return <Notifications />;
      case 'settings': return <Settings />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className='flex h-full'>
      <Sidebar user={user} onLogout={handleLogout} currentSection={currentSection} setCurrentSection={setCurrentSection} />
      <main className='flex-1 overflow-y-auto relative flex flex-col'>
        <Header currentSection={currentSection} />
        <div className='p-8 flex-1'>
          {renderSection()}
        </div>
      </main>
    </div>
  );
}

export default App
