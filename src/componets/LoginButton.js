import { useAuth0 } from "@auth0/auth0-react";
import styles from './Login.module.css';

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
  return (
    <div className={styles.container}>

      <h1>LOGIN</h1>

      <div className={styles.buttoncontainer}>


      <button onClick={() => loginWithRedirect()}>Log In</button>



      </div>



    </div>
    
    
  )
}

export default LoginButton
