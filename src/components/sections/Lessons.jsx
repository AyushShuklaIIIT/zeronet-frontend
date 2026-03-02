import React from 'react';
import { 
    Upload, 
    FileText, 
    Video, 
    HelpCircle, 
    AlignLeft, 
    Edit, 
    Trash2 
} from 'lucide-react';

const Lessons = ({ user }) => {
    const isAdmin = user?.role === 'admin';
    const loggedInTeacherName = 'Mrs. Sharma';

    const allLessons = [
        { title: 'Introduction to Algebra', author: 'Mrs. Sharma', type: 'PDF', color: 'blue', subject: 'Mathematics', target: 'Class 6A, 6B', status: 'Synced', statusColor: 'emerald' },
        { title: 'Plant Cell Structure', author: 'Mrs. Patel', type: 'Video', color: 'purple', subject: 'Science', target: 'Class 7A, 7B', status: 'In Use', statusColor: 'blue' },
        { title: 'Chapter 3 Quiz - Fractions', author: 'Mr. Verma', type: 'Quiz', color: 'emerald', subject: 'Mathematics', target: 'Class 8A', status: 'Pending Sync', statusColor: 'amber' },
        { title: 'English Grammar - Tenses', author: 'Mrs. Gupta', type: 'Text', color: 'amber', subject: 'English', target: 'Class 9A, 9B, 9C', status: 'Synced', statusColor: 'emerald' },
    ];

    const displayedLessons = isAdmin 
        ? allLessons 
        : allLessons.filter(lesson => lesson.author === loggedInTeacherName);

    const colorStyles = {
        blue: { bg: 'rgba(59, 130, 246, 0.2)', text: '#60a5fa' },
        purple: { bg: 'rgba(168, 85, 247, 0.2)', text: '#c084fc' },
        emerald: { bg: 'rgba(16, 185, 129, 0.2)', text: '#34d399' },
        amber: { bg: 'rgba(245, 158, 11, 0.2)', text: '#fbbf24' }
    };

    const getIconForType = (type) => {
        switch(type) {
            case 'PDF': return FileText;
            case 'Video': return Video;
            case 'Quiz': return HelpCircle;
            case 'Text': return AlignLeft;
            default: return FileText;
        }
    };

    return (
        <div className='fade-in'>
            <div className='flex items-center justify-between mb-6'>
                <div className='flex items-center gap-4'>
                    <select className='bg-slate-700 border border-slate-600 rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'>
                        <option>All Types</option>
                        <option>PDFs</option>
                        <option>Videos</option>
                        <option>Quizzes</option>
                    </select>
                    <select className='bg-slate-700 border border-slate-600 rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'>
                        <option>All Subjects</option>
                        <option>Mathematics</option>
                        <option>Science</option>
                        <option>English</option>
                    </select>
                    <select className='bg-slate-700 border border-slate-600 rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'>
                        <option>All Status</option>
                        <option>Synced</option>
                        <option>Pending Sync</option>
                        <option>In Use</option>
                    </select>
                </div>
                
                <button className='flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition'>
                    <Upload className="w-5 h-5" />
                    Upload Content
                </button>
            </div>

            <div className='bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden'>
                <div className="overflow-x-auto">
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
                            {displayedLessons.map((lesson, idx) => {
                                const typeColors = colorStyles[lesson.color];
                                const statusColors = colorStyles[lesson.statusColor];
                                const TypeIcon = getIconForType(lesson.type);

                                return (
                                    <tr key={idx} className='hover:bg-slate-700/30 transition'>
                                        <td className='px-6 py-4'>
                                            <div className='flex items-center gap-3'>
                                                <div 
                                                    className='w-10 h-10 rounded-lg flex items-center justify-center shrink-0'
                                                    style={{ backgroundColor: typeColors.bg, color: typeColors.text }}
                                                >
                                                    <TypeIcon className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <p className='text-white font-medium'>{lesson.title}</p>
                                                    <p className='text-slate-400 text-xs'>Uploaded by {lesson.author}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='px-6 py-4'>
                                            <span 
                                                className='px-3 py-1 text-xs font-medium rounded-full inline-block'
                                                style={{ backgroundColor: typeColors.bg, color: typeColors.text }}
                                            >
                                                {lesson.type}
                                            </span>
                                        </td>
                                        <td className='px-6 py-4 text-slate-300'>{lesson.subject}</td>
                                        <td className='px-6 py-4 text-slate-300'>{lesson.target}</td>
                                        <td className='px-6 py-4'>
                                            <span className='flex items-center gap-2 text-sm' style={{ color: statusColors.text }}>
                                                <span 
                                                    className={`w-2 h-2 rounded-full ${lesson.status === 'In Use' ? 'pulse-dot' : ''}`}
                                                    style={{ backgroundColor: statusColors.text }}
                                                ></span>
                                                {lesson.status}
                                            </span>
                                        </td>
                                        <td className='px-6 py-4'>
                                            <div className='flex items-center gap-2'>
                                                <button className='p-2 text-slate-400 hover:text-white hover:bg-slate-600 rounded-lg transition' title="Edit">
                                                    <Edit className="w-4 h-4" />
                                                </button>
                                                <button className='p-2 text-slate-400 hover:text-red-400 hover:bg-slate-600 rounded-lg transition' title="Delete">
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                
                {displayedLessons.length === 0 && (
                    <div className="p-8 text-center text-slate-400">
                        <Library className="w-12 h-12 mx-auto mb-3 opacity-50" />
                        <p>No content uploaded yet.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Lessons;