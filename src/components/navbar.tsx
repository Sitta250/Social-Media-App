import {Link} from 'react-router-dom'
import {auth} from '../config/firebase';
import {useAuthState} from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth';
export const Navbar = () => {
  const [user] = useAuthState(auth)

  const signUserOut = async()=>{
    await signOut(auth)
  }

  return ( 
    <div className='navbar'>
      <div className="links">
        <Link to="/" className='link'>Home</Link>
        {!user ?<Link to="/login" className='link'>Login</Link>:<Link to="/createpost" className='link'>Create Post</Link>}
        
      </div>
      <div className="user">
        {user && (
          <div className='nav-user-info'>
            <p>{auth.currentUser? auth.currentUser.displayName:'Guest'}</p>
            <img src={auth.currentUser?.photoURL || ''} alt="profile pic" className='nav-user-pfp'/>
            <button onClick={signUserOut} className='btn-logout'>log out</button>
        </div>
      )}
      </div>
      
    </div>
   );
}
 
