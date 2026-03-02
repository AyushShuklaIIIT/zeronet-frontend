import React, { useState } from 'react'

const Notifications = () => {
    const [notifType, setNotifType] = useState('announcement');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Notification Sent!');
    };


    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 fade-in'>
            <div className='bg-slate-800 rounded-2xl p-6 border border-slate-700'>
                <h3 className='text-lg font-semibold text-white mb-4'>Send Notification</h3>
                <form onSubmit={handleSubmit} className='space-y-4'>
                    <div>
                        <label className='block text-sm font-medium text-slate-300 mb-2'>Target Audience</label>
                        <select className='w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500'>
                            <option>All Users</option>
                            <option>Class 6A</option>
                            <option>Class 7B</option>
                        </select>
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-slate-300 mb-2'>Notification Type</label>
                        <div className='grid grid-cols-3 gap-2'>
                            <label className='cursor-pointer'>
                                <input type="radio" name="notifType" value="announcement" checked={notifType === 'announcement'} onChange={() => setNotifType('announcement')} className='peer sr-only' />
                                <div className='px-3 py-2 bg-slate-700 border-2 border-slate-600 rounded-lg text-center text-sm peer-checked:border-blue-500 peer-checked:bg-blue-500/10 transition'>Announcement</div>
                            </label>
                            <label className='cursor-pointer'>
                                <input type="radio" name="notifType" value="reminder" checked={notifType === 'reminder'} onChange={() => setNotifType('reminder')} className='peer sr-only' />
                                <div className='px-3 py-2 bg-slate-700 border-2 border-slate-600 rounded-lg text-center text-sm peer-checked:border-blue-500 peer-checked:bg-blue-500/10 transition'>Reminder</div>
                            </label>
                            <label className='cursor-pointer'>
                                <input type="radio" name="notifType" value="quiz" checked={notifType === 'quiz'} onChange={() => setNotifType('quiz')} className='peer sr-only' />
                                <div className='px-3 py-2 bg-slate-700 border-2 border-slate-600 rounded-lg text-center text-sm peer-checked:border-blue-500 peer-checked:bg-blue-500/10 transition'>Quiz Alert</div>
                            </label>
                        </div>
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-slate-300 mb-2'>Title</label>
                        <input type="text" className='w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='Enter notification title' />
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-slate-300 mb-2'>Message</label>
                        <textarea className='w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none' placeholder='Enter your message...'></textarea>
                    </div>
                    <button type="submit" className='w-full py-3 px-4 bg-linear-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg transition'>Send Notification</button>
                </form>
            </div>

            <div className='bg-slate-800 rounded-2xl p-6 border border-slate-700'>
                <h3 className='text-lg font-semibold text-white mb-4'>Notification History</h3>
                <div className='space-y-4 max-h-96 overflow-y-auto pr-2'>
                    <div className='bg-slate-700/50 rounded-xl p-4 border border-slate-600'>
                        <div className='flex items-start justify-between mb-2'>
                            <span className='text-xs font-medium text-blue-400 bg-blue-500/20 px-2 py-1 rounded'>Announcement</span>
                            <span className='text-slate-500 text-xs'>2 hours ago</span>
                        </div>
                        <h4 className='text-white font-medium mb-1'>Mid-term Exam Schedule</h4>
                        <p className='text-slate-400 text-sm mb-2'>Mid-term examinations will begin from March 15th.</p>
                    </div>
                    <div className='bg-slate-700/50 rounded-xl p-4 border border-slate-600'>
                        <div className='flex items-start justify-between mb-2'>
                            <span className='text-xs font-medium text-emerald-400 bg-emerald-500/20 px-2 py-1 rounded'>Quiz Alert</span>
                            <span className='text-slate-500 text-xs'>3 days ago</span>
                        </div>
                        <h4 className='text-white font-medium mb-1'>New Science Quiz Available</h4>
                        <p className='text-slate-400 text-sm mb-2'>A new quiz on Chapter 5 - Plant Biology is now available.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Notifications
