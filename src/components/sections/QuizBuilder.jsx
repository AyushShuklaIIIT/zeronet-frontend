import React, { useState } from 'react'

const QuizBuilder = () => {
    const [questions, setQuestions] = useState([
        { id: 1, type: 'mcq', text: '', options: ['', '', '', ''], answer: 0}
    ]);

    const addQuestion = (type) => {
        const newId = questions.length ? Math.max(...questions.map(q => q.id)) + 1 : 1;
        setQuestions([...questions, {
            id: newId,
            type,
            text: '',
            options: type === 'mcq' ? ['', '', '', ''] : undefined,
            expectedAnswer: type === 'short' ? '' : undefined
        }]);
    };

    const removeQuestion = (id) => setQuestions(questions.filter(q => q.id !== id));
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 fade-in'>
      <div className='lg:col-span-2 space-y-6'>
        <div className='bg-slate-800 rounded-2xl p-6 border border-slate-700'>
            <div className='flex items-center justify-between mb-4'>
                <h3 className='text-lg font-semibold text-white'>Questions</h3>
                <div className='flex gap-2'>
                    <button onClick={() => addQuestion('mcq')} className='px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg'>+ MCQ</button>
                    <button onClick={() => addQuestion('short')} className='px-3 py-2 bg-slate-700 hover:bg-slate-600 text-white text-sm font-medium rounded-lg'>+ Short Answer</button>
                </div>
            </div>

            <div className='space-y-4'>
                {questions.map((q, index) => (
                    <div key={q.id} className='bg-slate-700/50 rounded-xl p-4 border border-slate-600'>
                        <div className='flex items-center justify-between mb-3'>
                            <span className={`text-xs font-medium px-2 py-1 rounded ${q.type === 'mcq' ? 'text-blue-400 bg-blue-500/20' : 'text-emerald-400 bg-emerald-500/20'}`}>
                                {q.type === 'mcq' ? 'MCQ' : 'Short Answer'}
                            </span>
                            <button onClick={() => removeQuestion(q.id)} className='text-slate-400 hover:text-red-400 transition'>Remove</button>
                        </div>

                        <input type="text" className='w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white mb-3' placeholder='Enter question' />

                        {q.type === 'mcq' ? (
                            <div className='grid grid-cols-2 gap-2'>
                                {[0, 1, 2, 3].map(optIndex => (
                                    <div key={optIndex} className='flex items-center gap-2'>
                                        <input type="radio" name={`q${q.id}`} className='text-blue-500' />
                                        <input type="text" className='flex-1 px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white' placeholder={`Option ${optIndex + 1}`} />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <input type='text' className='w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-slate-400' placeholder='Expected answer (for grading reference)' />
                        )}
                    </div>
                ))}
            </div>
        </div>
      </div>

      <div className='space-y-6'>
        <div className='bg-slate-800 rounded-2xl p-6 border border-slate-700'>
            <h3 className='text-lg font-semibold text-white mb-4'>Quiz Summary</h3>
            <div className='space-y-3'>
                <div className='flex justify-between text-sm'>
                    <span className='text-slate-400'>Total Questions</span>
                    <span className='text-white font-medium'>{questions.length}</span>
                </div>
                <div className='flex justify-between text-sm'>
                    <span className='text-slate-400'>MCQ</span>
                    <span className='text-white font-medium'>{questions.filter(q => q.type === 'mcq').length}</span>
                </div>
                <div className='flex justify-between text-sm'>
                    <span className='text-slate-400'>Short Answer</span>
                    <span className='text-white font-medium'>{questions.filter(q => q.type === 'short').length}</span>
                </div>
            </div>
        </div>
        <button className='w-full py-3 px-4 bg-linear-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg transition'>Publish Quiz</button>
      </div>
    </div>
  )
}

export default QuizBuilder
