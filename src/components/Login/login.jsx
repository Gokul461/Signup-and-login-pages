import React, { useState } from 'react';
import './login.css';
import Email from '../assests/email.png';
import Password from '../assests/key.png';
import Person from '../assests/person.png';

const Login = () => {
  const [action, setAction] = useState('Login');

  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        {action === 'Login' ? null : (
          <div className='input'>
            <img src={Person} alt='user_icon' />
            <input type='text' placeholder='Name' />
          </div>
        )}
        <div className='input'>
          <img src={Email} alt='email_icon' />
          <input type='email' placeholder='Email Id' />
        </div>
        <div className='input'>
          <img src={Password} alt='passsword_icon' />
          <input type='password' placeholder='Password' />
        </div>
      </div>
      {/* forget-password */}
      {action === 'Sign Up' ? null : (
        <div className='forget-password'>
          Forget Password? <span>Click Here! </span>
        </div>
      )}
      <div className='submit-container'>
        <div
          className={action === 'Login' ? 'submit gray' : 'submit'}
          onClick={() => setAction('Sign Up')}
        >
          Sign Up
        </div>
        <div
          className={action === 'Sign Up' ? 'submit gray' : 'submit'}
          onClick={() => setAction('Login')}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default Login;