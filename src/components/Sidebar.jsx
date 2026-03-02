import React from 'react';
import { 
    LayoutDashboard, Users, Library, ClipboardEdit, 
    BarChart2, Bell, Settings as SettingsIcon, LogOut, X 
} from 'lucide-react';

const Sidebar = ({ user, onLogout, currentSection, setCurrentSection, isSidebarOpen, setIsSidebarOpen }) => {
    const navItems = [
        { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
        { id: 'classes', label: 'Classes', icon: Users },
        { id: 'lessons', label: 'Lessons & Quizzes', icon: Library },
        { id: 'quiz-builder', label: 'Quiz Builder', icon: ClipboardEdit },
        { id: 'analytics', label: 'Analytics', icon: BarChart2 },
        { id: 'notifications', label: 'Notifications', icon: Bell },
        { id: 'settings', label: 'Settings', icon: SettingsIcon }
    ];

    const handleNavClick = (id) => {
        setCurrentSection(id);
        setIsSidebarOpen(false); 
    };

    return (
        <>
            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 bg-slate-950/60 z-40 lg:hidden backdrop-blur-sm transition-opacity"
                    onClick={() => setIsSidebarOpen(false)}
                ></div>
            )}

            <aside className={`
                fixed inset-y-0 left-0 z-50 w-64 bg-slate-800 border-r border-slate-700 flex flex-col shrink-0 
                transition-transform duration-300 ease-in-out
                lg:translate-x-0 lg:static lg:h-full
                ${isSidebarOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'}
            `}>
                <div className='p-6 border-b border-slate-700 flex items-center justify-between gap-3'>
                    <div className='flex items-center gap-3'>
                        <div className='w-10 h-10 rounded-xl bg-linear-to-br from-blue-500 to-blue-700 flex items-center justify-center'>
                            <span className='text-white font-bold'>ZN</span>
                        </div>
                        <div>
                            <h2 className='font-bold text-white text-sm'>ZeroNet</h2>
                            <p className='text-xs text-slate-400'>Classroom</p>
                        </div>
                    </div>
                    <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-slate-400 hover:text-white">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <nav className='flex-1 p-4 space-y-1 overflow-y-auto'>
                    {navItems.map((item) => (
                        <button 
                            key={item.id} 
                            onClick={() => handleNavClick(item.id)} 
                            className={`sidebar-item w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition ${currentSection === item.id ? 'bg-blue-600 text-white shadow-md shadow-blue-900/20' : 'text-slate-300 hover:bg-slate-700 hover:text-white'}`}
                        >
                            <item.icon className="w-5 h-5" />
                            <span className='font-medium'>{item.label}</span>
                        </button>
                    ))}
                </nav>

                <div className='p-4 border-t border-slate-700 flex items-center gap-3 px-4 py-3'>
                    <div className='w-10 h-10 rounded-full bg-linear-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white font-semibold shrink-0'>
                        {user.name.charAt(0)}
                    </div>
                    <div className='flex-1 min-w-0'>
                        <p className='font-medium text-white text-sm truncate'>{user.name}</p>
                        <p className='text-xs text-slate-400 capitalize'>{user.role}</p>
                    </div>
                    <button onClick={onLogout} className='p-2 text-slate-400 hover:text-red-400 transition shrink-0' title="Logout">
                        <LogOut className="w-5 h-5" />
                    </button>
                </div>
            </aside>
        </>
    );
}

export default Sidebar;