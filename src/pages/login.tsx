import {auth, provider} from '../config/firebase'
import {signInWithPopup} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'



export const Login = () => {

  const navigate = useNavigate()
  const signInWithGoogle = async() =>{
    const result =  await signInWithPopup(auth, provider)
    console.log(result)
    navigate('/')
  }



  return ( 
    <div className='signin-box'>
      <p>sign in with Google to continue</p>
      <button onClick={signInWithGoogle} className='signin-btn'>sign in with Google</button>

    </div>
   );
}
 
