import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <>
      <form id='signup'>
        <h2>Signup</h2>
        <div className='fields'>
          <label htmlFor='email'>Email</label>
          <input id='email' name='password' type='text' autoComplete='off' />
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            name='password'
            type='password'
            autoComplete='off'
          />
        </div>
        <button>Submit</button>
      </form>
      <p id='log_in_instead'>
        Already have an account? <Link to='/login'>Log in</Link>
      </p>
    </>
  )
}

export default Signup
