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
import { 
  Users, 
  GraduationCap, 
  BookOpen, 
  ClipboardList, 
  CheckCircle2, 
  CloudUpload, 
  UserPlus, 
  RefreshCw 
} from 'lucide-react';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = ({ user }) => {
    const isAdmin = user?.role === 'admin';

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
                        <div className='w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400'>
                            <Users className="w-6 h-6" />
                        </div>
                        <span className='text-emerald-400 text-sm font-medium'>Active</span>
                    </div>
                    <h3 className='text-3xl font-bold text-white mb-1'>{isAdmin ? '24' : '3'}</h3>
                    <p className='text-slate-400 text-sm'>{isAdmin ? 'Active Teachers' : 'My Classes'}</p>
                </div>

                <div className='card-hover bg-slate-800 rounded-2xl p-6 border border-slate-700'>
                    <div className='flex items-center justify-between mb-4'>
                        <div className='w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400'>
                            <GraduationCap className="w-6 h-6" />
                        </div>
                    </div>
                    <h3 className='text-3xl font-bold text-white mb-1'>{isAdmin ? '486' : '115'}</h3>
                    <p className='text-slate-400 text-sm'>{isAdmin ? 'Total Students' : 'My Students'}</p>
                </div>

                <div className='card-hover bg-slate-800 rounded-2xl p-6 border border-slate-700'>
                    <div className='flex items-center justify-between mb-4'>
                        <div className='w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400'>
                            <BookOpen className="w-6 h-6" />
                        </div>
                    </div>
                    <h3 className='text-3xl font-bold text-white mb-1'>{isAdmin ? '156' : '14'}</h3>
                    <p className='text-slate-400 text-sm'>{isAdmin ? 'Total Lessons Uploaded' : 'My Uploaded Lessons'}</p>
                </div>

                <div className='card-hover bg-slate-800 rounded-2xl p-6 border border-slate-700'>
                    <div className='flex items-center justify-between mb-4'>
                        <div className='w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400'>
                            <ClipboardList className="w-6 h-6" />
                        </div>
                    </div>
                    <h3 className='text-3xl font-bold text-white mb-1'>{isAdmin ? '12' : '4'}</h3>
                    <p className='text-slate-400 text-sm'>{isAdmin ? 'School Quizzes to Review' : 'My Quizzes to Review'}</p>
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
                        <ActivityItem icon={CheckCircle2} color="#10b981" bg="rgba(16, 185, 129, 0.2)" title="Quiz Submitted" desc="Class 8A - Math Quiz completed" time="2 min ago" />
                        <ActivityItem icon={CloudUpload} color="#3b82f6" bg="rgba(59, 130, 246, 0.2)" title="Content Uploaded" desc="New Science lesson by Mrs. Patel" time="15 min ago" />
                        <ActivityItem icon={UserPlus} color="#a855f7" bg="rgba(168, 85, 247, 0.2)" title="New Student Added" desc="Rahul K. joined Class 7B" time="1 hour ago" />
                        <ActivityItem icon={RefreshCw} color="#f59e0b" bg="rgba(245, 158, 11, 0.2)" title="Sync Completed" desc="All devices synced successfully" time="2 hours ago" />
                    </div>
                </div>
            </div>
        </div>
    )
}

function ActivityItem({ icon: Icon, color, bg, title, desc, time }) {
    return (
        <div className='flex items-start gap-3'>
            <div className='w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5' style={{ backgroundColor: bg, color: color }}>
                <Icon className='w-4 h-4' />
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