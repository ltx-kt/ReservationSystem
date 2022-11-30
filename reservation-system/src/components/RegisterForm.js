import React from 'react';
import './RegisterForm.css';

const EMAIL_REGEX = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

function RegisterForm() {
    return (
        <>
            {/* <video src="/videos/resturant-1.mp4" autoPlay loop muted /> */}
            <div class="wrapper">
                <form class="form-right">
                    <h2 class="text-uppercase">Registration form</h2>
                    <div class="row">
                        <div class="col-sm-6 mb-3">
                            <label>First Name</label>
                            <input type="text" name="first_name" id="first_name" class="input-field" />
                        </div>
                        <div class="col-sm-6 mb-3">
                            <label>Last Name</label>
                            <input type="text" name="last_name" id="last_name" class="input-field" />
                        </div>
                    </div>
                    <div class="mb-3">
                        <label>Email</label>
                        <input type="email" class="input-field" name="email" required />
                    </div>
                    <div class="row">
                        <div class="col-sm-6 mb-3">
                            <label>Password</label>
                            <input type="password" name="pwd" id="pwd" class="input-field" />
                        </div>
                        <div class="col-sm-6 mb-3">
                            <label>Confirm Password</label>
                            <input type="password" name="cpwd" id="cpwd" class="input-field" />
                        </div>
                    </div>
                    <div class="form-field">
                        <input type="submit" value="Register" class="register" name="register" />
                    </div>
                    <div class="mb-3">
                        <div>Have an account already?    <a href="/signin">Sign In</a>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default RegisterForm;