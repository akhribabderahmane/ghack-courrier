import React from 'react'
import Form from '../../components/Form'

const SingUp = () => {
  return (
    <div className='w-full bg-slate-300 min-h-screen pt-10 space-y-8'>
      <div className=' text-center mb-4'>
        Logo
      </div>
      <section>
        <div className='mt-4'>
          <p className=' font-semibold text-2xl text-center'>Get Started</p>
          <h2 className=' text-3xl font-semibold text-center'>Tell us a bit about you</h2>
        </div>
        <div className=' w-full flex justify-center mt-4'>
          <Form />
        </div>
      </section>
    </div>
  )
}

export default SingUp