import { FormEvent } from 'react'

import styles from '@/styles/Index.module.css'

export default function Home () {
  function handleLogin (event: FormEvent) {
    event.preventDefault()
  }

  return (
    <>
    <div className={styles.container}>
      <form onSubmit={handleLogin} className={styles['login-form']}>
        <img src={process.env.NEXT_PUBLIC_BASEPATH + '/assets/liberty_or_death.png'} alt="" />
        <div className="input-group">
          <label htmlFor="user-input">User</label>
          <input className={styles['login-form-input']} type="text" id="user-input" name="user-input" required />
        </div>
        <div className="input-group">
          <label htmlFor="password-input">Password</label>
          <input className={styles['login-form-input']} type="password" id="password-input" name="password-input" required />
        </div>
        <div className={`input-group ${styles['login-input-button']}`}>
          <button className={styles['login-button']}>Login</button>
        </div>
      </form>
    </div>
   </>
  )
}