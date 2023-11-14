
import { useContext } from 'react';
import Home from './Pages/Home'
import Provider from './context/provider'
import 'bootstrap/dist/css/bootstrap.min.css';
import context from './context/context';
import Login from './Pages/Login';

function App() {
  const { logged, toggleUser, toggleLogged } = useContext(context);
  /**
   * const user = JSON.parse(localStorage.getItem('user')) || null
  if(user) {
    toggleUser(user);
    toggleLogged(true);
  }
   */
  if(!logged) return <Login />
  return (
      <Home/>
  )
}

export default App
