import React from 'react'

const Settings = () => {
    const saveSchoolDetails = (e) => {
        e.preventDefault();
        alert('School details saved!');
    }

  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 fade-in'>
      <div className='lg:col-span-2 space-y-6'>
        <div className='bg-slate-800 rounded-2xl p-6 border border-slate-700'>
            <h3 className='text-lg font-semibold text-white mb-4'>School Details</h3>
            <form onSubmit={saveSchoolDetails}>
                <div className='grid grid-cols-2 gap-4'>
                    <div className='col-span-2'>
                        <label className='block text-sm font-medium text-slate-300 mb-2'>School Name</label>
                        <input type="text" defaultValue="Indian Institute of Information Technology, Bhopal" className='w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500' />
                    </div>
                    <div className='col-span-2'>
                        <label className='block text-sm font-medium text-slate-300 mb-2'>Address</label>
                        <textarea defaultValue="NTB, MANIT Bhopal - 462003" className='w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white h-20 resize-none'></textarea>
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-slate-300 mb-2'>Phone</label>
                        <input type="text" defaultValue="011 2553 2553" className='w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:outline-none' />
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-slate-300 mb-2'>Email</label>
                        <input type="email" defaultValue="info@iiitb.ac.in" className='w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:outline-none' />
                    </div>
                    <div className='col-span-2 mt-2'>
                        <button type="submit" className='px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition'>Save Changes</button>
                    </div>
                </div>
            </form>
        </div>

        <div className='bg-slate-800 rounded-2xl p-6 border border-slate-700'>
            <div className='flex items-center justify-between mb-4'>
                <h3 className='text-lg font-semibold text-white'>Teacher Accounts</h3>
                <button className='px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-xl'>Add Teacher</button>
            </div>
            <div className='space-y-3'>
                {['Mrs. Sharma', 'Mr. Verma', 'Mrs. Patel'].map((teacher, i) => (
                    <div key={i} className='flex items-center justify-between p-4 bg-slate-700/50 rounded-xl'>
                        <div className='flex items-center gap-3'>
                            <div className='w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white'>{teacher.charAt(0)}</div>
                            <div>
                                <p className='text-white font-medium'>{teacher}</p>
                                <p className='text-slate-400 text-xs'>teacher@iiitb.ac.in</p>
                            </div>
                        </div>
                        <button className='text-slate-400 hover:text-white'>Edit</button>
                    </div>
                ))}
            </div>
        </div>
      </div>

      <div className='space-y-6'>
        <div className='bg-slate-800 rounded-2xl p-6 border border-slate-700'>
            <h3 className='text-lg font-semibold text-white mb-4'>Quick Settings</h3>
            <div className='space-y-4'>
                <ToggleSetting title="Auto-sync Content" desc="Sync when connected" defaultChecked />
                <ToggleSetting title="Email Notifications" desc="Quiz submissions" defaultChecked />
                <ToggleSetting title="Low-bandwidth Mode" desc="Reduce data usage" />
            </div>
        </div>

        <div className='bg-slate-800 rounded-2xl p-6 border border-slate-700'>
            <h3 className='text-lg font-semibold text-white mb-4'>System Info</h3>
            <div className='space-y-3 text-sm'>
                <div className='flex justify-between'>
                    <span className='text-slate-400'>Version</span> <span className='text-white'>2.4.1</span>
                </div>
                <div className='flex justify-between'>
                    <span className='text-slate-400'>Last Sync</span> <span className='text-white'>2 min ago</span>
                </div>
                <div className='flex justify-between'>
                    <span className='text-slate-400'>Storage Used</span> <span className='text-white'>2.4 GB / 10 GB</span>
                </div>
                <div className='w-full h-2 bg-slate-700 rounded-full overflow-hidden'>
                    <div className='h-full bg-blue-500 rounded-full' style={{ width: '24%' }}></div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

function ToggleSetting({ title, desc, defaultChecked = false }) {
    return (
        <div className='flex items-center justify-between'>
            <div>
                <p className='text-white font-medium text-sm'>{title}</p>
                <p className='text-slate-400 text-xs'>{desc}</p>
            </div>
            <label className='relative inline-flex items-center cursor-pointer'>
                <input type="checkbox" className='sr-only peer' defaultChecked={defaultChecked} />
                <div className="w-11 h-6 bg-slate-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
        </div>
    );
}

export default Settings
