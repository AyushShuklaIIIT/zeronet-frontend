import React from 'react'

const Lessons = () => {
    const lessons = [
    { title: 'Introduction to Algebra', author: 'Mrs. Sharma', type: 'PDF', color: 'blue', subject: 'Mathematics', target: 'Class 6A, 6B', status: 'Synced', statusColor: 'emerald' },
    { title: 'Plant Cell Structure', author: 'Mrs. Patel', type: 'Video', color: 'purple', subject: 'Science', target: 'Class 7A, 7B', status: 'In Use', statusColor: 'blue' },
    { title: 'Chapter 3 Quiz - Fractions', author: 'Mr. Verma', type: 'Quiz', color: 'emerald', subject: 'Mathematics', target: 'Class 8A', status: 'Pending Sync', statusColor: 'amber' },
    { title: 'English Grammar - Tenses', author: 'Mrs. Gupta', type: 'Text', color: 'amber', subject: 'English', target: 'Class 9A, 9B, 9C', status: 'Synced', statusColor: 'emerald' },
  ];

  return (
    <div className='fade-in'>
      <div className='flex items-center justify-between mb-6'>
        <div className='flex items-center gap-4'>
            <select className='bg-slate-700 border border-slate-600 rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'>
                <option>All Types</option>
            </select>
            <select className='bg-slate-700 border border-slate-600 rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'>
                <option>All Subjects</option>
            </select>
            <select className='bg-slate-700 border border-slate-600 rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'>
                <option>All Status</option>
            </select>
        </div>
        <button className='flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition'>
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12' />
            </svg>
            Upload Content
        </button>
      </div>

      <div className='bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden'>
        <table className='w-full'>
            <thead className='bg-slate-700/50'>
                <tr>
                    <th className='px-6 py-4 text-left text-sm font-semibold text-slate-300'>Title</th>
                    <th className='px-6 py-4 text-left text-sm font-semibold text-slate-300'>Type</th>
                    <th className='px-6 py-4 text-left text-sm font-semibold text-slate-300'>Subject</th>
                    <th className='px-6 py-4 text-left text-sm font-semibold text-slate-300'>Class</th>
                    <th className='px-6 py-4 text-left text-sm font-semibold text-slate-300'>Status</th>
                    <th className='px-6 py-4 text-left text-sm font-semibold text-slate-300'>Actions</th>
                </tr>
            </thead>
            <tbody className='divide-y divide-slate-700'>
                {lessons.map((lesson, idx) => (
                    <tr key={idx} className='hover:bg-slate-700/30 transition'>
                        <td className='px-6 py-4'>
                            <div className='flex items-center gap-3'>
                                <div className={`w-10 h-10 rounded-lg bg-${lesson.color}-500/20 flex items-center justify-center`}>
                                    <span className={`w-5 h-5 bg-${lesson.color}-400 rounded-full`}></span>
                                </div>
                                <div>
                                    <p className='text-white font-medium'>{lesson.title}</p>
                                    <p className='text-slate-400 text-xs'>Uploaded by {lesson.author}</p>
                                </div>
                            </div>
                        </td>
                        <td className='px-6 py-4'>
                            <span className={`px-3 py-1 bg-${lesson.color}-500/20 text-${lesson.color}-400 text-xs font-medium rounded-full`}>{lesson.type}</span>
                        </td>
                        <td className='px-6 py-4 text-slate-300'>{lesson.subject}</td>
                        <td className='px-6 py-4 text-slate-300'>{lesson.target}</td>
                        <td className='px-6 py-4'>
                            <span className={`flex items-center gap-2 text-${lesson.statusColor}-400 text-sm`}>
                                <span className={`w-2 h-2 bg-${lesson.statusColor}-400 rounded-full ${lesson.status === 'In Use' ? 'pulse-dot' : ''}`}></span>
                                {lesson.status}
                            </span>
                        </td>
                        <td className='px-6 py-4'>
                            <div className='flex items-center gap-2'>
                                <button className='p-2 text-slate-400 hover:text-white hover:bg-slate-600 rounded-lg transition'>Edit</button>
                                <button className='p-2 text-slate-400 hover:text-red-400 hover:bg-slate-600 rounded-lg transition'>Del</button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    </div>
  );
}

export default Lessons
