import React, {useState} from 'react'
import './pages.css'

function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = (e) =>{
    e.preventDefault()
  }


  
  return (
    <div>
      <form onSubmit={onSubmit}>
      <div className='heading'>
          <h3>Mathias Auth</h3>
      </div>
      <div className='form-container'>
                  <input type="email" placeholder='Enter Email'/>
                  <input type="password" placeholder='Enter Password' />

                     <button>Sign-Up</button>
           </div>


      </form>
          

    </div>
  )
}

export default SignUp