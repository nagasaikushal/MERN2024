import React from 'react'
import '../index.css'
const Register = () => {
  return (
    <div>
      <section>
        <main>
          <div className="section-reg">
            <div className="two-grid-col">
              <div className="reg-image">
                <img src="/assets/Register_page.png" alt="A Girl trying to register" width="600" height="600" />
              </div>
              <div className="reg-form">
                <h1 classname="main-heading mb-3">Registration Form</h1>
                <br/>
                <form>
                  <>
                  <label htmlFor='username'>Username</label>
                  <input 
                  type='text'
                  name='username'
                  placeholder='username'
                  id='username'
                  required
                  autoComplete='off'/>
                  <br/>
                  </>
                  <>
                  <label htmlFor='Email'>Email</label>
                  <input 
                  type='text'
                  name='email'
                  placeholder='email'
                  id='email'
                  required
                  autoComplete='off'/>
                  <br/>
                  </>
                  <>
                  <label htmlFor='Phone'>Phone</label>
                  <input 
                  type='text'
                  name='Phone'
                  placeholder='Phone'
                  id='Phone'
                  required
                  autoComplete='off'/>
                  <br/>
                  </>
                  <>
                  <label htmlFor='password'>password</label>
                  <input 
                  type='text'
                  name='password'
                  placeholder='password'
                  id='password'
                  required
                  autoComplete='off'/>
                  <br/>
                  </>
                  <br/>
                  <div className="submit-button">
                  <button type="submit">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  )
}

export default Register