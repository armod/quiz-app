import React from 'react'
import { useGlobalContext } from './context'

const SetupForm = () => {
  const { handleSubmit, handleChange, quiz, error } = useGlobalContext()

  return (
    <main>
      <section className='quiz quiz-smal'>
        <form className='setup-form'>
          {/* amount */}
          <div className='form-control'>
            <label htmlFor='amount'>number of question</label>
            <input
              type='number'
              name='amount'
              id='amount'
              value={quiz.amount}
              onChange={handleChange}
              className='form-input'
              min={1}
              max={50}
            />
          </div>
          {/* category */}
          <div className='form-control'>
            <label htmlFor='category'>category</label>
            <select
              name='category'
              id='category'
              className='form-input'
              value={quiz.category}
              onChange={handleChange}
            >
              <option value='sports'>sports</option>
              <option value='history'>history</option>
              <option value='politics'>politics</option>
            </select>
          </div>
          {/* defficulty */}
          <div className='form-control'>
            <label htmlFor='defficulty'>select defficulty</label>
            <select
              name='defficulty'
              id='defficulty'
              className='form-input'
              value={quiz.defficulty}
              onChange={handleChange}
            >
              <option value='easy'>easy</option>
              <option value='medium'>medium</option>
              <option value='hard'>hard</option>
            </select>
          </div>
          {error && (
            <p className='error'>
              can't generate questions, plase try different options
            </p>
          )}
          <button className='submit-btn' type='submit' onClick={handleSubmit}>
            start
          </button>
        </form>
      </section>
    </main>
  )
}

export default SetupForm
