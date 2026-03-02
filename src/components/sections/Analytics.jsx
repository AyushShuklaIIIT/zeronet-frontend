import React from 'react';

const Analytics = () => {
    const students = [
        { name: 'Aarav Sharma', initials: 'A', class: 'Class 8A', quizzes: '12/15', score: '89%', attendance: '95%', color: 'blue' },
        { name: 'Priya Patel', initials: 'P', class: 'Class 7B', quizzes: '15/15', score: '94%', attendance: '100%', color: 'purple' },
        { name: 'Rahul Kumar', initials: 'R', class: 'Class 9C', quizzes: '10/15', score: '67%', attendance: '78%', color: 'emerald', trendingDown: true },
    ];

    const avatarMap = {
        blue: 'from-blue-400 to-blue-600',
        purple: 'from-purple-400 to-purple-600',
        emerald: 'from-emerald-400 to-emerald-600'
    };

    return (
        <div className='fade-in space-y-6'>
            <div className='flex items-center justify-between mb-6'>
                <div className='flex items-center gap-4'>
                    <select className='bg-slate-700 border border-slate-600 rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'>
                        <option>All Classes</option>
                    </select>
                    <select className='bg-slate-700 border border-slate-600 rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'>
                        <option>All Subjects</option>
                    </select>
                    <select className='bg-slate-700 border border-slate-600 rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'>
                        <option>This Month</option>
                    </select>
                </div>
                <div className='flex gap-2'>
                    <button className='flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-xl transition'>Export CSV</button>
                    <button className='flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition'>Export PDF</button>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                <StatCard title="Quizzes Taken" value={1247} iconColor="blue" />
                <StatCard title="Completion Rate" value="87%" iconColor="emerald" />
                <StatCard title="Average Score" value="72%" iconColor="purple" />
                <StatCard title="Avg. Time Spent" value="24m" iconColor="amber" />
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                <div className='bg-slate-800 rounded-2xl p-6 border border-slate-700'>
                    <h3 className='text-lg font-semibold text-white mb-4'>Score Distribution</h3>
                    <div className='space-y-4'>
                        <ProgressBar label="90-100%" count="23 students" percentage="15%" color="emerald" />
                        <ProgressBar label="80-89%" count="67 students" percentage="45%" color="blue" />
                        <ProgressBar label="70-79%" count="89 students" percentage="60%" color="purple" />
                        <ProgressBar label="60-69%" count="45 students" percentage="30%" color="amber" />
                        <ProgressBar label="Below 60%" count="18 students" percentage="12%" color="red" />
                    </div>
                </div>

                <div className='bg-slate-800 rounded-2xl p-6 border border-slate-700'>
                    <h3 className='text-lg font-semibold text-white mb-4'>Subject Performance</h3>
                    <div className='space-y-4'>
                        <SubjectBar subject="Mathematics" score="78%" completed="45 quizzes completed" color="blue" />
                        <SubjectBar subject="Science" score="82%" completed="38 quizzes completed" color="emerald" />
                        <SubjectBar subject="English" score="71%" completed="32 quizzes completed" color="purple" />
                    </div>
                </div>
            </div>

            <div className='bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden'>
                <div className='px-6 py-4 border-b border-slate-700'>
                    <h3 className='text-lg font-semibold text-white'>Student Performance</h3>
                </div>
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
                        {students.map((student, idx) => (
                            <tr key={idx} className='hover:bg-slate-700/30 transition'>
                                <td className='px-6 py-4'>
                                    <div className='flex items-center gap-3'>
                                        <div className={`w-8 h-8 rounded-full bg-linear-to-br ${avatarMap[student.color]} flex items-center justify-center text-white text-sm font-medium`}>
                                            {student.initials}
                                        </div>
                                        <span className='text-white font-medium'>{student.name}</span>
                                    </div>
                                </td>
                                <td className='px-6 py-4 text-slate-300'>{student.class}</td>
                                <td className='px-6 py-4 text-slate-300'>{student.quizzes}</td>
                                <td className='px-6 py-4'>
                                    <span className={`${student.trendingDown ? 'text-amber-400' : 'text-emerald-400'} font-medium`}>{student.score}</span>
                                </td>
                                <td className='px-6 py-4'>
                                    <span className={`${student.trendingDown ? 'text-amber-400' : 'text-emerald-400'} font-medium`}>{student.attendance}</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function StatCard({ title, value, iconColor }) {
    const bgMap = {
        blue: 'bg-blue-500/20',
        emerald: 'bg-emerald-500/20',
        purple: 'bg-purple-500/20',
        amber: 'bg-amber-500/20'
    };

    return (
        <div className='bg-slate-800 rounded-2xl p-6 border border-slate-700'>
            <div className='flex items-center gap-3 mb-2'>
                <div className={`w-10 h-10 rounded-xl ${bgMap[iconColor]} flex items-center justify-center`}></div>
                <span className='text-slate-400 text-sm'>{title}</span>
            </div>
            <h3 className='text-3xl font-bold text-white'>{value}</h3>
        </div>
    );
}

function ProgressBar({ label, count, percentage, color }) {
    const gradientMap = {
        emerald: 'from-emerald-500 to-emerald-400',
        blue: 'from-blue-500 to-blue-400',
        purple: 'from-purple-500 to-purple-400',
        amber: 'from-amber-500 to-amber-400',
        red: 'from-red-500 to-red-400'
    };

    return (
        <div>
            <div className='flex justify-between text-sm mb-1'>
                <span className='text-slate-400'>{label}</span>
                <span className='text-white font-medium'>{count}</span>
            </div>
            <div className='h-3 bg-slate-700 rounded-full overflow-hidden'>
                <div className={`h-full bg-linear-to-r ${gradientMap[color]} rounded-full`} style={{ width: percentage }}></div>
            </div>
        </div>
    );
}

function SubjectBar({ subject, score, completed, color }) {
    const colorMap = {
        blue: { light: 'bg-blue-500/20', text: 'text-blue-400', fill: 'bg-blue-500' },
        emerald: { light: 'bg-emerald-500/20', text: 'text-emerald-400', fill: 'bg-emerald-500' },
        purple: { light: 'bg-purple-500/20', text: 'text-purple-400', fill: 'bg-purple-500' }
    };
    const mappedColors = colorMap[color];

    return (
        <div className='flex items-center gap-4'>
            <div className={`w-16 h-16 rounded-xl ${mappedColors.light} flex items-center justify-center`}>
                <span className={`text-2xl font-bold ${mappedColors.text}`}>{score}</span>
            </div>
            <div className='flex-1'>
                <p className='text-white font-medium'>{subject}</p>
                <p className='text-slate-400 text-sm'>{completed}</p>
                <div className='h-2 bg-slate-700 rounded-full mt-2 overflow-hidden'>
                    <div className={`h-full ${mappedColors.fill} rounded-full`} style={{ width: score }}></div>
                </div>
            </div>
        </div>
    );
}

export default Analytics;