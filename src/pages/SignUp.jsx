import React, {useState} from 'react'
import {getAuth, createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import {db} from '../firebase.config'
import './pages.css'
import {useNavigate} from 'react-router-dom'

function SignUp() {
   const navigate = useNavigate()

  const [FormData, setFormData] = useState({
    email: '',
    password: ''
  })

  const {email, password} = FormData

  const onSubmit = async (e) =>{
    e.preventDefault()

    try{
    const auth = getAuth()
    const userCredential = await createUserWithEmailAndPassword(auth, email[0], password[0])


    

    //for db
    const user = userCredential.user

    updateProfile(auth.currentUser, {
      displayEmail: email
    })
    navigate('/home')
  
    }catch(error){
    console.log(error)
    }
  }

  const onChange = (e) =>{
     setFormData((prevState)=>({
        ...prevState, 
        [e.target.id]: [e.target.value]
     }))
  }

  
  return (
    <div>
      <form onSubmit={onSubmit}>
      <div className='heading'>
          <h3>Mathias Auth</h3>
      </div>
      <div className='form-container'>
                  <input 
                  type="email" 
                  placeholder='Enter Email' 
                  id='email'
                  value={email}
                  onChange={onChange}
                  />
                  <input
                   type="password"
                   placeholder='Enter Password' 
                   id='password'
                   value={password}
                    onChange={onChange}
                   />

                     <button onSubmit={onSubmit}>Sign-Up</button>
           </div>


      </form>
          

    </div>
  )
}

export default SignUp