import './App.scss';
import Chat from './components/Chat';
import SignIn from './components/SignIn';
import {auth} from './firebase.js';
import { useAuthState } from 'react-firebase-hooks/auth';

function App() {
 const [user] = useAuthState(auth)
  return (
    <div className='app__chat'>
     {user ? <Chat/> : <SignIn/>}
    </div>
  );
}

export default App;
