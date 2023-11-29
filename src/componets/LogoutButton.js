import React from 'react';
import styles from './Logout.module.css';
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
    const { logout } = useAuth0();
  return (

      <div className={styles.container}>

        <h1>Hola Mundo!!</h1>

        <div className={styles.buttoncontainer}>
          
          <button onClick={() => logout()}>LogOut</button>

         </div>


      </div> //new commet
    
    

    
      
    
  );
}

export default LogoutButton