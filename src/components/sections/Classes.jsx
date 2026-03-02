import React from 'react';
import { Plus, User, Users, BookOpen } from 'lucide-react';

const Classes = ({ user }) => {
    const isAdmin = user?.role === 'admin';
    const loggedInTeacherName = 'Mrs. Sharma';

    const allClasses = [
        { name: 'Class 6A', status: 'Active', color: 'blue', teacher: 'Mrs. Sharma', students: 32, subjects: 'Mathematics, Science' },
        { name: 'Class 7B', status: 'Active', color: 'emerald', teacher: 'Mr. Verma', students: 28, subjects: 'English, Social Studies' },
        { name: 'Class 8A', status: 'Active', color: 'purple', teacher: 'Mrs. Patel', students: 35, subjects: 'Science, Mathematics' },
        { name: 'Class 9C', status: 'Pending Sync', color: 'amber', teacher: 'Mr. Kumar', students: 30, subjects: 'Physics, Chemistry' },
        { name: 'Class 10A', status: 'Active', color: 'rose', teacher: 'Mrs. Gupta', students: 38, subjects: 'All Subjects' },
    ];

    const displayedClasses = isAdmin 
        ? allClasses 
        : allClasses.filter(cls => cls.teacher === loggedInTeacherName);

    const gradientMap = {
        blue: ['#3b82f6', '#1d4ed8'],
        emerald: ['#10b981', '#047857'],
        purple: ['#a855f7', '#7e22ce'],
        amber: ['#f59e0b', '#b45309'],
        rose: ['#f43f5e', '#be123c']
    };

    return (
        <div className='fade-in'>
            <div className='flex items-center justify-between mb-6'>
                <div className='flex items-center gap-4'>
                    <select className='bg-slate-700 border border-slate-600 rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'>
                        <option>All Grades</option>
                        <option>Grade 6</option>
                        <option>Grade 7</option>
                    </select>
                    <select className='bg-slate-700 border border-slate-600 rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'>
                        <option>All Subjects</option>
                        <option>Mathematics</option>
                        <option>Science</option>
                    </select>
                </div>

                {isAdmin && (
                    <button className='flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition'>
                        <Plus className="w-5 h-5" />
                        Add Class
                    </button>
                )}
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {displayedClasses.map((cls, idx) => {
                    const hexGrad = gradientMap[cls.color];
                    return (
                        <div key={idx} className='card-hover bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden flex flex-col'>
                            <div className="h-2 w-full" style={{ backgroundImage: `linear-gradient(90deg, ${hexGrad[0]}, ${hexGrad[1]})` }}></div>
                            <div className='p-6 flex-1 flex flex-col'>
                                <div className='flex items-center justify-between mb-4'>
                                    <h3 className='text-xl font-bold text-white'>{cls.name}</h3>
                                    <span className="px-3 py-1 text-xs font-medium rounded-full" 
                                          style={{ backgroundColor: cls.status === 'Active' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(245, 158, 11, 0.2)', color: cls.status === 'Active' ? '#34d399' : '#fbbf24' }}>
                                        {cls.status}
                                    </span>
                                </div>
                                <div className='space-y-3 mb-6 flex-1'>
                                    <div className='flex items-center gap-2 text-slate-400 text-sm'>
                                        <User className="w-4 h-4" />
                                        <span>{cls.teacher}</span>
                                    </div>
                                    <div className='flex items-center gap-2 text-slate-400 text-sm'>
                                        <Users className="w-4 h-4" />
                                        <span>{cls.students} Students</span>
                                    </div>
                                    <div className='flex items-center gap-2 text-slate-400 text-sm'>
                                        <BookOpen className="w-4 h-4" />
                                        <span>{cls.subjects}</span>
                                    </div>
                                </div>
                                <div className='flex gap-2 mt-auto'>
                                    <button className='flex-1 px-3 py-2 bg-slate-700 hover:bg-slate-600 text-white text-sm font-medium rounded-lg transition'>View</button>
                                    <button className='flex-1 px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition'>Manage</button>
                                </div>
                            </div>
                        </div>
                    )
                })}

                {isAdmin && (
                    <div className='card-hover bg-slate-800/50 rounded-2xl border-2 border-dashed border-slate-600 flex items-center justify-center min-h-60 cursor-pointer hover:border-blue-500 hover:bg-slate-800 transition'>
                        <div className='text-center'>
                            <div className='w-14 h-14 mx-auto mb-3 rounded-full bg-slate-700 flex items-center justify-center'>
                                <Plus className="w-7 h-7 text-slate-400" />
                            </div>
                            <p className='text-slate-400 font-medium'>Add New Class</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Classes;