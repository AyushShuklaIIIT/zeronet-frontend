import React, { useState } from 'react';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/sections/Dashboard';
import Classes from './components/sections/Classes';
import Lessons from './components/sections/Lessons';
import QuizBuilder from './components/sections/QuizBuilder';
import Analytics from './components/sections/Analytics';
import Notifications from './components/sections/Notifications';
import Settings from './components/sections/Settings';

function App() {
  const [user, setUser] = useState(null);
  const [currentSection, setCurrentSection] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
      case 'dashboard': return <Dashboard user={user} />;
      case 'classes': return <Classes user={user} />;
      case 'lessons': return <Lessons user={user} />;
      case 'quiz-builder': return <QuizBuilder user={user} />;
      case 'analytics': return <Analytics user={user} />;
      case 'notifications': return <Notifications user={user} />;
      case 'settings': return <Settings user={user} />;
      default: return <Dashboard user={user} />;
    }
  };

  return (
    <div className='flex h-full'>
      <Sidebar 
        user={user} 
        onLogout={handleLogout} 
        currentSection={currentSection} 
        setCurrentSection={setCurrentSection} 
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <main className='flex-1 overflow-y-auto relative flex flex-col w-full'>
        <Header 
          currentSection={currentSection} 
          setIsSidebarOpen={setIsSidebarOpen} 
        />
        <div className='p-4 md:p-8 flex-1'>
          {renderSection()}
        </div>
      </main>
    </div>
  );
}

export default App;