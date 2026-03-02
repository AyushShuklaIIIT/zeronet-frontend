import React, {useState} from 'react'

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('admin');

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin({
            email,
            role,
            name: role === 'admin' ? 'Admin User' : 'Teacher User'
        });
    };

  return (
    <div className='h-full flex items-center justify-center p-4'>
        <div className="w-full max-w-md fade-in">
            <div className='text-center mb-8'>
                <div className='w-20 h-20 mx-auto mb-4 rounded-2xl bg-linear-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/30'>
                    <svg className='w-10 h-10 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' />
                    </svg>
                </div>
                <h1 className='text-3xl font-bold text-white mb-2'>ZeroNet Classroom</h1>
                <p className='text-slate-400'>Academic Management Portal</p>
            </div>

            <div className='bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-700'>
                <form onSubmit={handleSubmit}>
                    <div className='mb-6'>
                        <label className='block text-sm font-medium text-slate-300 mb-2'>Email Address</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className='w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='admin@school.edu' />
                    </div>

                    <div className='mb-6'>
                        <label className='block text-sm font-medium text-slate-300 mb-2'>Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className='w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='........' />
                    </div>

                    <div className='mb-6'>
                        <label className='block text-sm font-medium text-slate-300 mb-3'>Login As</label>
                        <div className='grid grid-cols-2 gap-3'>
                            <label className='relative cursor-pointer'>
                                <input type="radio" name="role" value="admin" checked={role === 'admin'} onChange={() => setRole('admin')} className='peer sr-only' />
                                <div className='px-4 py-3 bg-slate-700 border-2 border-slate-600 rounded-xl text-center peer-checked:border-blue-500 peer-checked:bg-blue-500/10 transition'>
                                    <span className='text-sm font-medium text-slate-300 peer-checked:text-blue-400'>Admin</span>
                                </div>
                            </label>
                            <label className='relative cursor-pointer'>
                                <input type="radio" name="role" value="teacher" checked={role === 'teacher'} onChange={() => setRole('teacher')} className='peer sr-only' />
                                <div className='px-4 py-3 bg-slate-700 border-2 border-slate-600 rounded-xl text-center peer-checked:border-blue-500 peer-checked:bg-blue-500/10 transition'>
                                    <span className='text-sm font-medium text-slate-300 peer-checked:text-blue-400'>Teacher</span>
                                </div>
                            </label>
                        </div>
                    </div>

                    <button type="submit" className='w-full py-3 px-4 bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-500 text-white font-semibold rounded-xl shadow-lg transition transform hover:scale-[1.02]'>
                        Sign In
                    </button>
                </form>
            </div>
        </div>      
    </div>
  )
}

export default Login