import 'dotenv/config'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { StyledLogin } from '@/styles/Login';
import { FormEvent, useRef } from 'react';
import { getFirebaseApp } from "@/core/infra/repositories/firebase/client";
import { useRouter } from 'next/router';

export default function Home () {
  let app: any;
  const router = useRouter();

  let loginInputRef = useRef<HTMLInputElement>(null);
  let passwordInputRef = useRef<HTMLInputElement>(null);
  let loginButtonRef = useRef<HTMLButtonElement>(null);

  try{
    app = getFirebaseApp({
      apiKey: process.env.NEXT_PUBLIC_API_KEY||'',
      authDomain: process.env.NEXT_PUBLIC_AUTH_HOST||'',
      projectId: process.env.NEXT_PUBLIC_FIRESTORE_HOST||'',
      storageBucket: process.env.NEXT_PUBLIC_FIRESTORE_HOST||'',
      messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID||'',
      appId: process.env.NEXT_PUBLIC_APP_ID||'',
      measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID||'',
    });
  }
  catch(error) {
    console.error(`Firebase configuration error: `, error);
  }

  function handleLogin(event: FormEvent) {
    setLoading(true)
    event.preventDefault()
    const login = loginInputRef.current?.value || '';
    const password = passwordInputRef.current?.value || '';

    let auth = getAuth(app);
    signInWithEmailAndPassword(auth, login, password)
    .then((userCredential) => {
      const user:any = userCredential.user;
      localStorage.setItem('accessToken', user.accessToken);

      // router.push('/admin');
    })
    .catch((error) => {
      alert(`Error during user login: ${error.message}`);
    })
    .finally(()=>{
      setLoading(false);
    })
  }

  function setLoading(status: boolean) {
    if(status) {
      if(loginButtonRef.current) {
        loginButtonRef.current.innerText = 'Loading...';
      }
    }
    else {
      if(loginButtonRef.current) {
        loginButtonRef.current.innerText = 'Login';
      }
    }
    if(loginButtonRef.current) {
      loginButtonRef.current.disabled = status;
    }
  }


  return (
    <>
    <StyledLogin>
      <form onSubmit={handleLogin} className='login-form'>
        <img src={process.env.NEXT_PUBLIC_BASEPATH + '/assets/liberty_or_death.png'} alt="" />
        <div className="input-group">
          <label htmlFor="user-input">User</label>
          <input ref={loginInputRef} className='login-form-input' type="email" id="user-input" name="user-input" required />
        </div>
        <div className="input-group">
          <label htmlFor="password-input">Password</label>
          <input ref={passwordInputRef} className='login-form-input' type="password" id="password-input" name="password-input" required />
        </div>
        <div className={`input-group ${'login-input-button'}`}>
          <button ref={loginButtonRef} className='login-button'>Login</button>
        </div>
      </form>
    </StyledLogin>
   </>
  )
}