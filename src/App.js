
import './App.css';
import LoginButton from "./componets/LoginButton"
import LogoutButton from './componets/LogoutButton';
import Profile from './componets/Profile';

import { useAuth0 } from "@auth0/auth0-react";


function App() {

  //condicion de logueo

  const {isAuthenticated, isLoading} = useAuth0();

  if (isLoading) return <h1>Loading...</h1>
 
  
  return (
    <div className="App">

     <h1>APLICATION</h1>
     { isAuthenticated?  <LogoutButton/> : <LoginButton/> }
     
     <Profile/>
     
      
    </div>
  );
}

export default App;
