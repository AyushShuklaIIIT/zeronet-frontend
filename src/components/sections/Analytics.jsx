import React from 'react';
import { Download, FileText, ClipboardCheck, CheckCircle, TrendingUp, Clock } from 'lucide-react';

const Analytics = ({ user }) => {
    const isAdmin = user?.role === 'admin';
    const loggedInTeacherClass = 'Class 8A';

    const allStudents = [
        { name: 'Aarav Sharma', initials: 'A', class: 'Class 8A', quizzes: '12/15', score: '89%', attendance: '95%', color: 'blue' },
        { name: 'Priya Patel', initials: 'P', class: 'Class 7B', quizzes: '15/15', score: '94%', attendance: '100%', color: 'purple' },
        { name: 'Rahul Kumar', initials: 'R', class: 'Class 9C', quizzes: '10/15', score: '67%', attendance: '78%', color: 'emerald', trendingDown: true },
    ];

    const displayedStudents = isAdmin ? allStudents : allStudents.filter(student => student.class === loggedInTeacherClass);

    const totalQuizzes = isAdmin ? 1247 : 142;
    const averageScore = isAdmin ? '72%' : '85%';

    const avatarMap = {
        blue: ['#60a5fa', '#2563eb'],
        purple: ['#c084fc', '#9333ea'],
        emerald: ['#34d399', '#059669'],
        amber: ['#fbbf24', '#d97706'],
        red: ['#f87171', '#dc2626']
    };

    return (
        <div className='fade-in space-y-6'>
            <div className='flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-6'>
                <div className='flex flex-wrap items-center gap-3 w-full lg:w-auto'>
                    <select className='w-full sm:w-auto bg-slate-700 border border-slate-600 rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'>
                        <option>{isAdmin ? 'All Classes' : 'My Classes'}</option>
                    </select>
                    <select className='w-full sm:w-auto bg-slate-700 border border-slate-600 rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'>
                        <option>All Subjects</option>
                    </select>
                    <select className='w-full sm:w-auto bg-slate-700 border border-slate-600 rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'>
                        <option>This Month</option>
                    </select>
                </div>
                <div className='flex flex-wrap gap-2 w-full lg:w-auto'>
                    <button className='flex-1 sm:flex-none flex justify-center items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-xl transition text-sm'>
                        <Download className="w-4 h-4" />
                        Export CSV
                    </button>
                    <button className='flex-1 sm:flex-none flex justify-center items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition text-sm'>
                        <FileText className="w-4 h-4" />
                        Export PDF
                    </button>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6'>
                <StatCard icon={ClipboardCheck} title="Quizzes Taken" value={totalQuizzes} bg="rgba(59, 130, 246, 0.2)" iconColor={avatarMap.blue[0]} />
                <StatCard icon={CheckCircle} title="Completion Rate" value="87%" bg="rgba(16, 185, 129, 0.2)" iconColor={avatarMap.emerald[0]} />
                <StatCard icon={TrendingUp} title="Average Score" value={averageScore} bg="rgba(168, 85, 247, 0.2)" iconColor={avatarMap.purple[0]} />
                <StatCard icon={Clock} title="Avg. Time Spent" value="24m" bg="rgba(245, 158, 11, 0.2)" iconColor={avatarMap.amber[0]} />
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                <div className='bg-slate-800 rounded-2xl p-6 border border-slate-700'>
                    <h3 className='text-lg font-semibold text-white mb-4'>{isAdmin ? 'School Score Distribution' : 'Class Score Distribution'}</h3>
                    <div className='space-y-4'>
                        <ProgressBar label="90-100%" count={isAdmin ? "23 students" : "12 students"} percentage={isAdmin ? "15%" : "35%"} hexColors={avatarMap.emerald} />
                        <ProgressBar label="80-89%" count={isAdmin ? "67 students" : "18 students"} percentage="45%" hexColors={avatarMap.blue} />
                        <ProgressBar label="70-79%" count={isAdmin ? "89 students" : "4 students"} percentage={isAdmin ? "60%" : "15%"} hexColors={avatarMap.purple} />
                        <ProgressBar label="60-69%" count={isAdmin ? "45 students" : "1 student"} percentage={isAdmin ? "30%" : "5%"} hexColors={avatarMap.amber} />
                        <ProgressBar label="Below 60%" count={isAdmin ? "18 students" : "0 students"} percentage={isAdmin ? "12%" : "0%"} hexColors={avatarMap.red} />
                    </div>
                </div>

                <div className='bg-slate-800 rounded-2xl p-6 border border-slate-700'>
                    <h3 className='text-lg font-semibold text-white mb-4'>Subject Performance</h3>
                    <div className='space-y-4'>
                        <SubjectBar subject="Mathematics" score="78%" completed="45 quizzes completed" hexColors={avatarMap.blue} bg="rgba(59, 130, 246, 0.2)" />
                        <SubjectBar subject="Science" score="82%" completed="38 quizzes completed" hexColors={avatarMap.emerald} bg="rgba(16, 185, 129, 0.2)" />
                        <SubjectBar subject="English" score="71%" completed="32 quizzes completed" hexColors={avatarMap.purple} bg="rgba(168, 85, 247, 0.2)" />
                    </div>
                </div>
            </div>

            <div className='bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden'>
                <div className='px-6 py-4 border-b border-slate-700'>
                    <h3 className='text-lg font-semibold text-white'>{isAdmin ? 'All Students' : 'My Students'}</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className='w-full'>
                        <thead className='bg-slate-700/50'>
                            <tr>
                                <th className='px-6 py-3 text-left text-sm font-semibold text-slate-300'>Student</th>
                                <th className='px-6 py-3 text-left text-sm font-semibold text-slate-300'>Class</th>
                                <th className='px-6 py-3 text-left text-sm font-semibold text-slate-300'>Quizzes</th>
                                <th className='px-6 py-3 text-left text-sm font-semibold text-slate-300'>Avg Score</th>
                                <th className='px-6 py-3 text-left text-sm font-semibold text-slate-300'>Attendance</th>
                            </tr>
                        </thead>
                        <tbody className='divide-y divide-slate-700'>
                            {displayedStudents.map((student, idx) => {
                                const hexGrad = avatarMap[student.color] || avatarMap.blue;
                                return (
                                    <tr key={idx} className='hover:bg-slate-700/30 transition'>
                                        <td className='px-6 py-4'>
                                            <div className='flex items-center gap-3'>
                                                <div className='w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium shrink-0'
                                                     style={{ backgroundImage: `linear-gradient(135deg, ${hexGrad[0]}, ${hexGrad[1]})` }}>
                                                    {student.initials}
                                                </div>
                                                <span className='text-white font-medium whitespace-nowrap'>{student.name}</span>
                                            </div>
                                        </td>
                                        <td className='px-6 py-4 text-slate-300 whitespace-nowrap'>{student.class}</td>
                                        <td className='px-6 py-4 text-slate-300 whitespace-nowrap'>{student.quizzes}</td>
                                        <td className='px-6 py-4'>
                                            <span style={{ color: student.trendingDown ? '#fbbf24' : '#34d399' }} className='font-medium'>{student.score}</span>
                                        </td>
                                        <td className='px-6 py-4'>
                                            <span style={{ color: student.trendingDown ? '#fbbf24' : '#34d399' }} className='font-medium'>{student.attendance}</span>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

function StatCard({ icon: Icon, title, value, bg, iconColor }) {
    return (
        <div className='bg-slate-800 rounded-2xl p-6 border border-slate-700'>
            <div className='flex items-center gap-3 mb-2'>
                <div className='w-10 h-10 rounded-xl flex items-center justify-center shrink-0' style={{ backgroundColor: bg }}>
                    <Icon className="w-5 h-5" style={{ color: iconColor }} />
                </div>
                <span className='text-slate-400 text-sm'>{title}</span>
            </div>
            <h3 className='text-3xl font-bold text-white'>{value}</h3>
        </div>
    );
}

function ProgressBar({ label, count, percentage, hexColors }) {
    return (
        <div>
            <div className='flex justify-between text-sm mb-1'>
                <span className='text-slate-400'>{label}</span>
                <span className='text-white font-medium'>{count}</span>
            </div>
            <div className='h-3 bg-slate-700 rounded-full overflow-hidden'>
                <div className='h-full rounded-full' style={{ width: percentage, backgroundImage: `linear-gradient(90deg, ${hexColors[0]}, ${hexColors[1]})` }}></div>
            </div>
        </div>
    );
}

function SubjectBar({ subject, score, completed, hexColors, bg }) {
    return (
        <div className='flex items-center gap-4'>
            <div className='w-16 h-16 rounded-xl flex items-center justify-center shrink-0' style={{ backgroundColor: bg }}>
                <span className='text-2xl font-bold' style={{ color: hexColors[0] }}>{score}</span>
            </div>
            <div className='flex-1 min-w-0'>
                <p className='text-white font-medium truncate'>{subject}</p>
                <p className='text-slate-400 text-sm truncate'>{completed}</p>
                <div className='h-2 bg-slate-700 rounded-full mt-2 overflow-hidden'>
                    <div className='h-full rounded-full' style={{ width: score, backgroundColor: hexColors[1] }}></div>
                </div>
            </div>
        </div>
    );
}

export default Analytics;