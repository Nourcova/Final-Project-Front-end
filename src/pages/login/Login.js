import React from 'react'
import login_background from '../../assets/images/login_background.jpg'
import './Login.css'

function Login_page() {
  return (
    <div className='container-fluid login_container'>
      <div className='row'>
        <div className='d-none d-md-block col-sm-6 login_image'>
          <img src={login_background} alt="login_background" className='login_image' />
        </div>
        <div className='col-12 col-md-6 login_form'>
          <div className='pet_walker'>
            <p style={{ color: "#011627" }}>Pet</p>  &nbsp;
            <p style={{ color: "#58EF79" }}>Walker</p>
          </div>
          <div>
            <p style={{ fontSize: "1.8rem" }}>Sign in</p>
          </div>
          <form>
            <div class="form-group form_group_login">
              <input type="email" class="form-control form-control-input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              <i class="fa-solid fa-envelope icon_position"></i>

            </div>
            <div class="form-group form_group_login">
              <input type="password" class="form-control form-control-input" id="exampleInputPassword1" placeholder="Password" />
              <i class="fa-solid fa-lock  icon_position"></i>

            </div>
            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1" />
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login_page