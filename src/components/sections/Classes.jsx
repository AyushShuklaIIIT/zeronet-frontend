import React from 'react';

const Classes = () => {
  const classes = [
    { name: 'Class 6A', status: 'Active', color: 'blue', teacher: 'Mrs. Sharma', students: 32, subjects: 'Mathematics, Science' },
    { name: 'Class 7B', status: 'Active', color: 'emerald', teacher: 'Mr. Verma', students: 28, subjects: 'English, Social Studies' },
    { name: 'Class 8A', status: 'Active', color: 'purple', teacher: 'Mrs. Patel', students: 35, subjects: 'Science, Mathematics' },
    { name: 'Class 9C', status: 'Pending Sync', color: 'amber', teacher: 'Mr. Kumar', students: 30, subjects: 'Physics, Chemistry' },
    { name: 'Class 10A', status: 'Active', color: 'rose', teacher: 'Mrs. Gupta', students: 38, subjects: 'All Subjects' },
  ];

  const gradientMap = {
    blue: 'from-blue-500 to-blue-600',
    emerald: 'from-emerald-500 to-emerald-600',
    purple: 'from-purple-500 to-purple-600',
    amber: 'from-amber-500 to-amber-600',
    rose: 'from-rose-500 to-rose-600'
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
        <button className='flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition'>
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 6v6m0 0v6m0-6h6m-6 0H6' />
            </svg>
            Add Class
        </button>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {classes.map((cls, idx) => (
            <div key={idx} className='card-hover bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden'>
                <div className={`h-2 bg-linear-to-r ${gradientMap[cls.color]}`}></div>
                <div className='p-6'>
                    <div className='flex items-center justify-between mb-4'>
                        <h3 className='text-xl font-bold text-white'>{cls.name}</h3>
                        <span className={`px-3 py-1 text-xs font-medium rounded-full ${cls.status === 'Active' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'}`}>
                            {cls.status}
                        </span>
                    </div>
                    <div className='space-y-3 mb-4'>
                        <div className='flex items-center gap-2 text-slate-400 text-sm'>
                            <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' />
                            </svg>
                            <span>{cls.teacher}</span>
                        </div>
                        <div className='flex items-center gap-2 text-slate-400 text-sm'>
                            <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' />
                            </svg>
                            <span>{cls.students} Students</span>
                        </div>
                        <div className='flex items-center gap-2 text-slate-400 text-sm'>
                            <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' />
                            </svg>
                            <span>{cls.subjects}</span>
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <button className='flex-1 px-3 py-2 bg-slate-700 hover:bg-slate-600 text-white text-sm font-medium rounded-lg transition'>View</button>
                        <button className='flex-1 px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition'>Manage</button>
                    </div>
                </div>
            </div>
        ))}

        <div className='card-hover bg-slate-800/50 rounded-2xl border-2 border-dashed border-slate-600 flex items-center justify-center min-h-60 cursor-pointer hover:border-blue-500 hover:bg-slate-800 transition'>
            <div className='text-center'>
                <div className='w-14 h-14 mx-auto mb-3 rounded-full bg-slate-700 flex items-center justify-center'>
                    <svg className='w-7 h-7 text-slate-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 6v6m0 0v6m0-6h6m-6 0H6' />
                    </svg>
                </div>
                <p className='text-slate-400 font-medium'>Add New Class</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Classes;