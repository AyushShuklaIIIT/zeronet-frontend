import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: '#1e293b',
                titleColor: '#f1f5f9',
                bodyColor: '#cbd5e1',
                borderColor: '#334155',
                borderWidth: 1,
                padding: 10,
                displayColors: false,
                callbacks: {
                    label: (context) => `${context.raw}% Performance`
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
                grid: { color: '#334155' },
                ticks: { color: '#94a3b8' },
                border: { display: false }
            },
            x: {
                grid: { display: false },
                ticks: { color: '#94a3b8' },
                border: { display: false }
            }
        }
    };

    const chartData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Performance',
                data: [65, 80, 45, 90, 70, 30, 20],
                backgroundColor: (context) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
                    
                    if (context.dataIndex < 5) {
                        gradient.addColorStop(0, '#3b82f6');
                        gradient.addColorStop(1, '#1e3a8a');
                    } else {
                        gradient.addColorStop(0, '#475569');
                        gradient.addColorStop(1, '#1e293b');
                    }
                    return gradient;
                },
                borderRadius: 4,
                borderSkipped: false,
                barPercentage: 0.6
            }
        ]
    };

    return (
        <div className='fade-in space-y-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                <div className='card-hover bg-slate-800 rounded-2xl p-6 border border-slate-700'>
                    <div className='flex items-center justify-between mb-4'>
                        <div className='w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center'>
                            <svg className='w-6 h-6 text-blue-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' />
                            </svg>
                        </div>
                        <span className='text-emerald-400 text-sm font-medium'>+12%</span>
                    </div>
                    <h3 className='text-3xl font-bold text-white mb-1'>24</h3>
                    <p className='text-slate-400 text-sm'>Active Teachers</p>
                </div>

                <div className='card-hover bg-slate-800 rounded-2xl p-6 border border-slate-700'>
                    <div className='flex items-center justify-between mb-4'>
                        <div className='w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center'>
                            <svg className='w-6 h-6 text-emerald-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' />
                            </svg>
                        </div>
                        <span className='text-emerald-400 text-sm font-medium'>+8%</span>
                    </div>
                    <h3 className='text-3xl font-bold text-white mb-1'>486</h3>
                    <p className='text-slate-400 text-sm'>Total Students</p>
                </div>

                <div className='card-hover bg-slate-800 rounded-2xl p-6 border border-slate-700'>
                    <div className='flex items-center justify-between mb-4'>
                        <div className='w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center'>
                            <svg className='w-6 h-6 text-purple-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' />
                            </svg>
                        </div>
                        <span className='text-emerald-400 text-sm font-medium'>+23</span>
                    </div>
                    <h3 className='text-3xl font-bold text-white mb-1'>156</h3>
                    <p className='text-slate-400 text-sm'>Lessons Uploaded</p>
                </div>

                <div className='card-hover bg-slate-800 rounded-2xl p-6 border border-slate-700'>
                    <div className='flex items-center justify-between mb-4'>
                        <div className='w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center'>
                            <svg className='w-6 h-6 text-amber-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' />
                            </svg>
                        </div>
                        <span className='text-amber-400 text-sm font-medium'>Pending</span>
                    </div>
                    <h3 className='text-3xl font-bold text-white mb-1'>12</h3>
                    <p className='text-slate-400 text-sm'>Quizzes to Review</p>
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                <div className='lg:col-span-2 bg-slate-800 rounded-2xl p-6 border border-slate-700'>
                    <div className='flex items-center justify-between mb-6'>
                        <h3 className='text-lg font-semibold text-white'>Weekly Performance</h3>
                        <select className='bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500'>
                            <option>This Week</option>
                            <option>Last Week</option>
                            <option>This Month</option>
                        </select>
                    </div>

                    <div className='h-64 relative w-full'>
                        <Bar data={chartData} options={chartOptions} />
                    </div>
                </div>

                <div className='bg-slate-800 rounded-2xl p-6 border border-slate-700'>
                    <h3 className='text-lg font-semibold text-white mb-6'>Recent Activity</h3>
                    <div className='space-y-4'>
                        <ActivityItem icon="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" color="#10b981" bg="rgba(16, 185, 129, 0.2)" title="Quiz Submitted" desc="Class 8A - Math Quiz completed" time="2 min ago" />
                        <ActivityItem icon="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" color="#3b82f6" bg="rgba(59, 130, 246, 0.2)" title="Content Uploaded" desc="New Science lesson by Mrs. Patel" time="15 min ago" />
                        <ActivityItem icon="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" color="#a855f7" bg="rgba(168, 85, 247, 0.2)" title="New Student Added" desc="Rahul K. joined Class 7B" time="1 hour ago" />
                        <ActivityItem icon="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" color="#f59e0b" bg="rgba(245, 158, 11, 0.2)" title="Sync Completed" desc="All devices synced successfully" time="2 hours ago" />
                    </div>
                </div>
            </div>
        </div>
    )
}

function ActivityItem({ icon, color, bg, title, desc, time }) {
    return (
        <div className='flex items-start gap-3'>
            <div className='w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5' style={{ backgroundColor: bg, color: color }}>
                <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d={icon} />
                </svg>
            </div>
            <div>
                <p className='text-white text-sm font-medium'>{title}</p>
                <p className='text-slate-400 text-xs'>{desc}</p>
                <p className='text-slate-500 text-xs mt-1'>{time}</p>
            </div>
        </div>
    );
}

export default Dashboard;